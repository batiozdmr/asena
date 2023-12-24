import nltk
from nltk.corpus import stopwords
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from keras.models import Sequential
from keras.layers import Embedding, LSTM, Dense
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
import numpy as np
import tensorflow as tf
from selenium import webdriver
import string
from selenium.webdriver.common.by import By
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC

from apps.chat.models import AiData

tokenizer = Tokenizer()

TRAIN = True


def preprocess_text(text):
    text = ''.join([char for char in text if not char.isdigit()])
    special_characters = string.punctuation + '“”‘’()[]{}<>–—'
    text = ''.join([char for char in text if char not in special_characters])

    stop_words = set(stopwords.words('english'))
    words = nltk.word_tokenize(text)
    filtered_words = [word.lower() for word in words if word.lower() not in stop_words]

    return ' '.join(filtered_words)


def create_data_entries():
    nltk.download('stopwords')
    nltk.download('punkt')
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Chrome(options=options)

    for _ in range(849):
        url = "https://tr.wikipedia.org/wiki/%C3%96zel:Rastgele"
        driver.get(url)
        div_element = driver.find_element(By.CLASS_NAME, "mw-content-ltr")
        p_tags = div_element.find_elements(By.TAG_NAME, "p")
        text = " ".join(p_tag.text for p_tag in p_tags)
        AiData.objects.create(text=preprocess_text(text))

    driver.quit()
    return True


def build_model(X, algorithm):
    if algorithm == 'LSTM':
        model = Sequential([
            Embedding(input_dim=len(tokenizer.word_index) + 1, output_dim=128, input_length=X.shape[1]),
            LSTM(256, return_sequences=True),
            Dense(len(tokenizer.word_index) + 1, activation='softmax')
        ])
        model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    elif algorithm == 'NaiveBayes':
        model = MultinomialNB()
    elif algorithm == 'LogisticRegression':
        model = LogisticRegression(max_iter=1000)
    elif algorithm == 'SVM':
        model = SVC()
    elif algorithm == 'RandomForest':
        model = RandomForestClassifier()
    elif algorithm == 'KNeighbors':
        model = KNeighborsClassifier()
    elif algorithm == 'DecisionTree':
        model = DecisionTreeClassifier()
    else:
        raise ValueError(f"Unsupported algorithm: {algorithm}")
    return model


def train_model(X, y, algorithm):
    model = build_model(X, algorithm)
    model.fit(X, y, epochs=10, verbose=2)
    model.save_weights('models/asena.h5')
    return model


@csrf_exempt
def chat(request):
    model = tf.keras.models.load_model('models/asena_lstm.h5')
    if TRAIN:
        algorithms = ['LSTM', 'NaiveBayes', 'LogisticRegression', 'SVM', 'RandomForest', 'KNeighbors', 'DecisionTree']
        data_entries = AiData.objects.all()
        texts = [entry.text for entry in data_entries]

        for algorithm in algorithms:
            print(f"Training model with {algorithm}...")
            if algorithm == 'LSTM':
                tokenizer.fit_on_texts(texts)
                sequences = tokenizer.texts_to_sequences(texts)

                X = pad_sequences(sequences, padding='post')

                y = np.zeros_like(X)
                y[:, :-1] = X[:, 1:]

                model = train_model(X, y, algorithm)
            else:
                vectorizer = CountVectorizer()
                X = vectorizer.fit_transform(texts)
                tfidf_transformer = TfidfTransformer()
                X = tfidf_transformer.fit_transform(X)

                model = train_model(X, np.array([entry.label for entry in data_entries]), algorithm)

    question = request.POST.get("question")
    data_entries = AiData.objects.all()
    texts = [entry.text for entry in data_entries]

    tokenizer.fit_on_texts(texts)
    question_seq = tokenizer.texts_to_sequences([question])
    question_seq = pad_sequences(question_seq, padding='post')

    answer_seq = model.predict(question_seq)
    answer = " ".join(tokenizer.index_word.get(np.argmax(seq), "") for seq in answer_seq[0])

    last_answer = answer if answer else "Bunu henüz öğrenemedim, Sizlere başka bir konuda yardımcı olmak isterim."

    response_data = {'content': last_answer}
    return JsonResponse(response_data)
