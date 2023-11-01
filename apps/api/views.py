import difflib

import openai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os

import tensorflow as tf
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
import numpy as np
import matplotlib.pyplot as plt

from apps.ai.chat.models import EducationQuestionsAnswers
from translate import Translator

tokenizer = Tokenizer()

model_config = {
    'mode': "script",  # training, live, update, chatgpt
    'epochs': 3,
    'LSTM': 1,
}


def fetch_training_data():
    data_list = EducationQuestionsAnswers.objects.filter(question__isnull=False, answer__isnull=False)
    filtered_questions = []
    tokenizer_questions = []
    filtered_answers = []
    tokenizer_answers = []
    for data in data_list:
        data_question = data.question.lower()
        data_question = data_question.replace('[^\w\s]', '')

        data_answer = data.answer.lower()
        data_answer = data_answer.replace('[^\w\s]', '')
        if data.type_id == 2:
            filtered_questions.append(data_question)
            filtered_answers.append(data_answer)
        if not data.type_id == 3:
            tokenizer_questions.append(data_question)
            tokenizer_answers.append(data_answer)
    tokenizer.fit_on_texts(tokenizer_questions + tokenizer_answers)
    return filtered_questions, filtered_answers


def model_create():
    model_dosyasi = "data/asena.keras"
    questions, answers = fetch_training_data()

    tokenizer.fit_on_texts(questions + answers)
    questions_seq = tokenizer.texts_to_sequences(questions)
    answers_seq = tokenizer.texts_to_sequences(answers)

    max_seq_length = max(max(len(seq) for seq in questions_seq), max(len(seq) for seq in answers_seq))

    x_train = pad_sequences(questions_seq, maxlen=max_seq_length, padding='post')
    answers_seq_padded = pad_sequences(answers_seq, maxlen=max_seq_length, padding='post')

    y_train = np.zeros_like(answers_seq_padded)
    y_train[:, :-1] = answers_seq_padded[:, 1:]

    if os.path.exists(model_dosyasi) and model_config['mode'] == "live":
        model = tf.keras.models.load_model(model_dosyasi)
        return model, x_train, y_train, max_seq_length
    elif os.path.exists(model_dosyasi) and model_config['mode'] == "training":
        os.remove(model_dosyasi)
    elif model_config['mode'] == "training":
        pass
    elif model_config['mode'] == "training":
        quit("Update Modu Henüz Aktif Değil.")
    else:
        quit("Yanlış mod seçimi!!")
    model = tf.keras.Sequential()
    model.add(tf.keras.layers.Embedding(input_dim=len(tokenizer.word_index) + 1, output_dim=64,
                                        input_length=max_seq_length))
    for i in range(model_config['LSTM']):
        model.add(tf.keras.layers.LSTM(64, return_sequences=True))
    model.add(tf.keras.layers.Dropout(0.5))
    model.add(tf.keras.layers.Dense(len(tokenizer.word_index) + 1, activation='softmax'))
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    model.summary()
    history = model.fit(x_train, y_train, epochs=model_config['epochs'], verbose=2)
    education_graphics(history)
    model.save(model_dosyasi)
    return model, x_train, y_train, max_seq_length


def education_graphics(history):
    train_loss = history.history['loss']
    train_accuracy = history.history['accuracy']
    epochs = range(1, len(train_loss) + 1)
    plt.figure(figsize=(12, 4))
    plt.subplot(1, 2, 1)
    plt.plot(epochs, train_loss, 'bo-', label='Eğitim Kaybı')
    plt.title('Eğitim ve Doğrulama Kayıpları')
    plt.xlabel('Epok')
    plt.ylabel('Kayıp')
    plt.legend()
    plt.subplot(1, 2, 2)
    plt.plot(epochs, train_accuracy, 'bo-', label='Eğitim Doğruluğu')
    plt.title('Eğitim ve Doğrulama Doğrulukları')
    plt.xlabel('Epok')
    plt.ylabel('Doğruluk')
    plt.legend()
    plt.show()
    return


def find_closest_answer(question, question_answer):
    close_questions = difflib.get_close_matches(question, question_answer.keys())
    if close_questions:
        closest_question = close_questions[0]
        return question_answer[closest_question]
    else:
        return "Üzgünüm, bu soruya bir cevap bulamadım."


def question_save(question, answer):
    return


@csrf_exempt
def asena(request):
    question = request.POST.get("question", "")
    print(question)
    if not model_config['mode'] == "script":
        model, x_train, y_train, max_seq_length = model_create()
        question_seq = tokenizer.texts_to_sequences([question])
        if not question_seq or not question_seq[0]:
            generated_text = "Bu soru için bir cevap bulunamıyor. Daha fazla veri eklemeye devam edin."
        else:
            question_seq = pad_sequences(question_seq, maxlen=max_seq_length, padding='post')
            answer_seq = model.predict(question_seq)
            answer = ""
            for seq in answer_seq[0]:
                word_index = np.argmax(seq)
                word = tokenizer.index_word.get(word_index, "")
                if word:
                    answer += word + " "
            if answer:
                generated_text = answer
            else:
                generated_text = "Bunu henüz öğrenemedim. Beni geliştirmeye devam ederseniz öğrenebilirim."
    else:
        question_answer = {item.question: item.answer for item in
                           EducationQuestionsAnswers.objects.filter(question__isnull=False, answer__isnull=False)}
        generated_text = find_closest_answer(question, question_answer)
    response_data = {'content': generated_text}
    return JsonResponse(response_data, safe=False)
