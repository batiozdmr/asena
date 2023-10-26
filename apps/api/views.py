from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os

import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import create_engine, Column, Integer, String, Boolean

engine = create_engine('sqlite:///konusma_veritabani.db')

# Tabloyu tanımlayın (örnek olarak "konusma_verileri" tablosu)
Base = declarative_base()


class SorularCevaplar(Base):
    __tablename__ = 'konusma_verileri'
    id = Column(Integer, primary_key=True)
    kullanici_girdisi = Column(String)
    model_cevabi = Column(String)
    egitime_dahil = Column(Boolean, default=True)


tokenizer = Tokenizer()
Session = sessionmaker(bind=engine)
session = Session()


def egitim_verilerini_cek():
    data_list = session.query(SorularCevaplar).all()
    filtered_sorular = []
    tokenizer_sorular = []
    filtered_cevaplar = []
    tokenizer_cevaplar = []
    for data in data_list:
        if data.kullanici_girdisi != "" and data.model_cevabi != "":
            if data.egitime_dahil:
                filtered_sorular.append(data.kullanici_girdisi)
                filtered_cevaplar.append(data.model_cevabi)
                data.egitime_dahil = True
            tokenizer_sorular.append(data.kullanici_girdisi)
            tokenizer_cevaplar.append(data.model_cevabi)
    tokenizer.fit_on_texts(tokenizer_sorular + tokenizer_cevaplar)
    session.commit()
    return filtered_sorular, filtered_cevaplar


def model_create():
    current_file = "egitilmis_model.keras"
    if not os.path.exists(current_file):
        print("Data Ve Model Mevcut Değil.")
    sorular, cevaplar = egitim_verilerini_cek()
    sorular_seq = tokenizer.texts_to_sequences(sorular)
    cevaplar_seq = tokenizer.texts_to_sequences(cevaplar)

    # Girdi ve çıkış verilerini hazırlama
    max_soru_seq_len = max(len(seq) for seq in sorular_seq)
    x_train = pad_sequences(sorular_seq, maxlen=max_soru_seq_len, padding='post')

    # Çıkış verilerini uygun hale getirme
    cevaplar_seq_padded = pad_sequences(cevaplar_seq, maxlen=max_soru_seq_len, padding='post')
    y_train = np.zeros_like(cevaplar_seq_padded)
    y_train[:, :-1] = cevaplar_seq_padded[:, 1:]

    model = tf.keras.models.load_model(current_file)
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    model.summary()
    return model, x_train, y_train, max_soru_seq_len


@csrf_exempt
def asena(request):
    model, x_train, y_train, max_question_seq_len = model_create()
    question = request.POST.get("question")
    question_seq = tokenizer.texts_to_sequences([question])
    if not question_seq or not question_seq[0]:
        last_answer = "Bu soru için bir cevap bulunamıyor. Başka bir konuda yardımcı olmak isterim."
    else:
        question_seq = pad_sequences(question_seq, maxlen=25, padding='post')
        answer_seq = model.predict(question_seq)
        answer = ""
        for seq in answer_seq[0]:
            kelime_indexi = np.argmax(seq)
            kelime = tokenizer.index_word.get(kelime_indexi, "")
            if kelime:
                answer += kelime + " "
        if answer:
            last_answer = answer
        else:
            last_answer = "Bunu henüz öğrenemedim. Beni geliştirmeye devam ederseniz öğrenebilirim."
    response_data = {'content': last_answer}
    return JsonResponse(response_data, safe=False)
