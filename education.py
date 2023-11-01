import os
from django.conf import settings

from apps.ai.chat.models import EducationQuestionsAnswers

from keras.src.layers import SimpleRNN

from keras.preprocessing.text import Tokenizer
import tensorflow as tf
from keras.layers import Input, Embedding, LSTM, Dense
from keras.models import (Model)
import numpy as np

tokenizer = Tokenizer()

model_config = {
    "rnn_unit": [1024],
    "rnn_cell": "lstm",
    "encoder_rnn_type": "unidirectional",
    "attention_mechanism": None,
    "attention_size": None,
    "dense_layers": [4096],
    "dense_activation": "sigmoid",
    "optimizer": "adam",
    "learning_rate": 0.001,
    "dropout_keep_prob_dense": 0.8,
    "dropout_keep_prob_rnn_input": 0.8,
    "dropout_keep_prob_rnn_output": 0.8,
    "dropout_keep_prob_rnn_state": 0.8,
    "bucket_use_padding": False,
    "bucket_padding_input": [3, 5, 10, 15, 20],
    "bucket_padding_output": [1, 2, 3, 5, 10, 15, 21],
    "train_epochs": 6,
    "train_steps": 2500,
    "train_batch_size": 512,
    "log_per_step_percent": 10,
    "embedding_use_pretrained": False,
    "embedding_pretrained_path": "model/cc.en.300",
    "embedding_type": "fasttext",
    "embedding_size": 300,
    "embedding_negative_sample": 128,
    "vocab_limit": 0,
    "vocab_special_token": ["<start>", "<end>", "<pad>", "<unk>"],
    "ngram": 3,
    "reverse_input_sequence": True,
    "seq2seq_loss": True
}


def fetch_training_data():
    data_list = EducationQuestionsAnswers.objects.filter(question__isnull=False, answer__isnull=False)
    filtered_questions = []
    tokenizer_questions = []
    filtered_answers = []
    tokenizer_answers = []
    for data in data_list:
        if data.type_id == 2:
            filtered_questions.append(data.question)
            filtered_answers.append(data.answer)
        if not data.type_id == 3:
            tokenizer_questions.append(data.question)
            tokenizer_answers.append(data.answer)
    tokenizer.fit_on_texts(tokenizer_questions + tokenizer_answers)
    return filtered_questions, filtered_answers


def create_model():
    filtered_questions, filtered_answers = fetch_training_data()
    input_data = tokenizer.texts_to_sequences(filtered_questions)
    target_data = tokenizer.texts_to_sequences(filtered_answers)
    vocab_size = len(tokenizer.word_index) + 1
    max_seq_len = max(len(input_data), len(target_data))
    # Model girişleri oluşturun
    input_sequence = Input(shape=(max_seq_len,), name="input_sequence")
    target_sequence = Input(shape=(max_seq_len,), name="target_sequence")

    # Gömme katmanını oluşturun
    embedding_layer = Embedding(input_dim=vocab_size, output_dim=128)(input_sequence)

    # RNN hücresini ve katmanını oluşturun
    rnn_layer = LSTM(units=model_config["rnn_unit"][0], return_state=True)
    encoder_outputs, state_h, state_c = rnn_layer(embedding_layer)

    # Sıkıştırma (dense) katmanlarını ekleyin
    for units in model_config["dense_layers"]:
        encoder_outputs = Dense(units, activation=model_config["dense_activation"])(encoder_outputs)

    # Çıkış katmanını oluşturun
    output_sequence = Dense(vocab_size, activation="softmax")(encoder_outputs)

    # Modeli oluşturun
    model = Model(inputs=input_sequence, outputs=output_sequence)

    # Modeli derleyin
    optimizer = tf.keras.optimizers.Adam(learning_rate=model_config["learning_rate"])
    model.compile(optimizer=optimizer, loss="categorical_crossentropy", metrics=["accuracy"])

    # Modeli eğitin
    model.fit(x=input_data, y=target_data, batch_size=model_config["train_batch_size"],
              epochs=6)
    return model


# Modeli kullanmak için bir işlev
def predict_with_model(model, input_text, tokenizer):
    filtered_questions, filtered_answers = fetch_training_data()
    input_data = tokenizer.texts_to_sequences(filtered_questions)
    target_data = tokenizer.texts_to_sequences(filtered_answers)
    max_seq_len = max(len(input_data), len(target_data))

    # Giriş metni belirtilen tokenizer ile sayılara dönüştür
    input_seq = tokenizer.texts_to_sequences([input_text])[0]

    # Modelin beklediği maksimum dizi uzunluğuna (max_seq_len) uyacak şekilde dizi uzunluğunu ayarla
    input_seq = input_seq[:max_seq_len]

    # Giriş verisini modelin tahmin etmesi için yeniden şekillendir
    input_seq = np.array([input_seq])

    # Tahmin yap
    predictions = model.predict(input_seq)

    # Tahminlerden bir sonraki kelimeyi seçin
    next_word_index = np.argmax(predictions[0][-1])

    # Tokenizer ile bu endeks karşılık gelen kelimeyi al
    next_word = tokenizer.index_word.get(next_word_index, 'UNK')

    return next_word


# Örnek kullanım
input_text = "Merhaba, nasılsınız"
predicted_word = predict_with_model(create_model(), input_text, tokenizer)
print("Tahmin edilen kelime:", predicted_word)
