import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# Veritabanı bağlantısı oluşturun
engine = create_engine('sqlite:///konusma_veritabani.db')

# Tabloyu tanımlayın (örnek olarak "konusma_verileri" tablosu)
Base = declarative_base()


class SorularCevaplar(Base):
    __tablename__ = 'konusma_verileri'
    id = Column(Integer, primary_key=True)
    kullanici_girdisi = Column(String)
    model_cevabi = Column(String)


# Veritabanı işlemleri için oturumu başlatın
Session = sessionmaker(bind=engine)
session = Session()

tokenizer = Tokenizer()


def egitim_verilerini_cek():
    sorular = session.query(SorularCevaplar.kullanici_girdisi).all()
    cevaplar = session.query(SorularCevaplar.model_cevabi).all()

    sorular = [soru[0] for soru in sorular if soru[0] is not None]
    cevaplar = [cevap[0] for cevap in cevaplar if cevap[0] is not None]

    tokenizer.fit_on_texts(sorular + cevaplar)
    return sorular, cevaplar


def yeni_soru_ekle(soru_metni):
    if soru_metni not in egitim_verilerini_cek():
        yeni_soru = SorularCevaplar(kullanici_girdisi=soru_metni)
        session.add(yeni_soru)
        session.commit()


def model_olustur(sorular, cevaplar):
    # Metinleri sayılara dönüştürme
    sorular_seq = tokenizer.texts_to_sequences(sorular)
    cevaplar_seq = tokenizer.texts_to_sequences(cevaplar)

    # Girdi ve çıkış verilerini hazırlama
    max_soru_seq_len = max(len(seq) for seq in sorular_seq)
    x_train = pad_sequences(sorular_seq, maxlen=max_soru_seq_len, padding='post')

    # Çıkış verilerini uygun hale getirme
    cevaplar_seq_padded = pad_sequences(cevaplar_seq, maxlen=max_soru_seq_len, padding='post')
    y_train = np.zeros_like(cevaplar_seq_padded)
    y_train[:, :-1] = cevaplar_seq_padded[:, 1:]

    # Modeli oluşturma
    model = tf.keras.Sequential([
        # Kelime gömme katmanı
        tf.keras.layers.Embedding(input_dim=len(tokenizer.word_index) + 1, output_dim=64,
                                  input_length=max_soru_seq_len),

        # LSTM katmanı
        tf.keras.layers.LSTM(128, return_sequences=True),
        tf.keras.layers.LSTM(128, return_sequences=True),
        tf.keras.layers.LSTM(128, return_sequences=True),
        tf.keras.layers.LSTM(128, return_sequences=True),
        tf.keras.layers.LSTM(128, return_sequences=True),
        tf.keras.layers.LSTM(128, return_sequences=True),
        tf.keras.layers.LSTM(128, return_sequences=True),

        # Dropout katmanı ekleme (overfitting'i önlemek için)
        tf.keras.layers.Dropout(0.5),

        # Tam bağlantılı (dense) katman, çıkış sınıf sayısına sahip olmalı ve softmax aktivasyonu kullanmalı
        tf.keras.layers.Dense(len(tokenizer.word_index) + 1, activation='softmax')
    ])

    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    model.summary()

    model.fit(x_train, y_train, epochs=1000, verbose=2)
    return model, x_train, y_train, max_soru_seq_len


def egitim_verilerini_kaydet(soru, cevap):
    yeni_soru = SorularCevaplar(kullanici_girdisi=soru, model_cevabi=cevap)
    session.add(yeni_soru)
    session.commit()


def soru_sor_ve_cevap_al(model, max_soru_seq_len):
    while True:
        egitim_verilerini_kaydet("Soru örneği", "Cevap örneği")
        soru = input("Soru sorun (Çıkmak için 'q' tuşuna basın): ")
        if soru.lower() == 'q':
            break

        soru_seq = tokenizer.texts_to_sequences([soru])
        soru_seq = pad_sequences(soru_seq, maxlen=max_soru_seq_len, padding='post')
        cevap_seq = model.predict(soru_seq)
        cevap = ""
        for seq in cevap_seq[0]:
            kelime_indexi = np.argmax(seq)
            kelime = tokenizer.index_word.get(kelime_indexi, "")
            if kelime:
                cevap += kelime + " "
        if cevap:
            last_cevap = cevap
        else:
            last_cevap = "Bunu henüz öğrenemedim. Beni geliştirmeye devam ederseniz öğrenebilirim."
        print("Cevap:", last_cevap)


def modeli_egit_ve_kaydet(model, x_train, y_train, epochs):
    model.fit(x_train, y_train, epochs=epochs, verbose=2)
    model.save("egitilmis_model.h5")


sorular, cevaplar = egitim_verilerini_cek()
model, x_train, y_train, max_soru_seq_len = model_olustur(sorular, cevaplar)
model_olustur(sorular, cevaplar)
modeli_egit_ve_kaydet(model, x_train, y_train, epochs=10)
soru_sor_ve_cevap_al(model, max_soru_seq_len)
