import os

import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
import matplotlib.pyplot as plt

# Veritabanı bağlantısı oluşturun
engine = create_engine('sqlite:///konusma_veritabani.db')

# Tabloyu tanımlayın (örnek olarak "konusma_verileri" tablosu)
Base = declarative_base()


class SorularCevaplar(Base):
    __tablename__ = 'konusma_verileri'
    id = Column(Integer, primary_key=True)
    kullanici_girdisi = Column(String)
    model_cevabi = Column(String)
    egitime_dahil = Column(Boolean, default=True)


# Veritabanı işlemleri için oturumu başlatın
Session = sessionmaker(bind=engine)
session = Session()

tokenizer = Tokenizer()


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


def yeni_soru_ekle(soru_metni):
    if soru_metni not in egitim_verilerini_cek():
        yeni_soru = SorularCevaplar(kullanici_girdisi=soru_metni)
        session.add(yeni_soru)
        session.commit()


def create_model(tokenizer, max_seq_len):
    model = tf.keras.Sequential()
    model.add(
        tf.keras.layers.Embedding(input_dim=len(tokenizer.word_index) + 1, output_dim=256, input_length=max_seq_len))
    model.add(tf.keras.layers.LSTM(512, return_sequences=True))
    model.add(tf.keras.layers.LSTM(512, return_sequences=True))  # Daha fazla LSTM katmanı
    model.add(
        tf.keras.layers.TimeDistributed(tf.keras.layers.Dense(len(tokenizer.word_index) + 1, activation='softmax')))
    return model


def modify_model(existing_model, input_shape):
    new_model = tf.keras.Sequential()
    new_model.add(tf.keras.layers.Embedding(input_dim=existing_model.layers[0].input_dim, output_dim=256,
                                            input_length=input_shape))
    new_model.add(tf.keras.layers.LSTM(512, return_sequences=True))
    new_model.add(tf.keras.layers.LSTM(512, return_sequences=True))
    new_model.add(tf.keras.layers.TimeDistributed(
        tf.keras.layers.Dense(existing_model.layers[-1].input_shape[1], activation='softmax')))
    new_model.set_weights(existing_model.get_weights())
    new_model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    return new_model


def egitim_grafik(history):
    # Eğitim ve doğrulama kayıplarını ve doğrulukları alma
    train_loss = history.history['loss']
    train_accuracy = history.history['accuracy']

    # Eğitim grafiği oluşturma
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


def model_olustur(sorular, cevaplar):
    model_dosyasi = "egitilmis_model.keras"

    if not sorular or not cevaplar:
        # Eğer sorular ve cevaplar boşsa, mevcut modeli yükle
        if os.path.exists(model_dosyasi):
            mevcut_model = tf.keras.models.load_model(model_dosyasi)
            return mevcut_model, None, None, None
        else:
            quit("Data Ve Model Mevcut Değil.")

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

    # Modeli oluştur veya yükle
    if os.path.exists(model_dosyasi):
        mevcut_model = tf.keras.models.load_model(model_dosyasi)
        # Ağırlıkları kontrol et ve gerekiyorsa ayarlayın
        if mevcut_model.input_shape != x_train.shape[1:]:
            # Modelin giriş boyutu uyuşmuyorsa, ağırlıkları ayarlama işlemi yapılmalıdır.
            mevcut_model = modify_model(mevcut_model, x_train.shape[1:])
        return mevcut_model, x_train, y_train, max_soru_seq_len
    else:
        print(f"{model_dosyasi} dosyası bulunamadı. Modeli yükleyemedim.")

    model = create_model(tokenizer, max_soru_seq_len)
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    model.summary()

    history = model.fit(x_train, y_train, epochs=750, verbose=2)
    egitim_grafik(history)
    # model.save(model_dosyasi)
    return model, x_train, y_train, max_soru_seq_len


def egitim_verilerini_kaydet(soru, cevap):
    yeni_soru = SorularCevaplar(kullanici_girdisi=soru, model_cevabi=cevap, egitime_dahil=False)
    session.add(yeni_soru)
    session.commit()


def soru_sor_ve_cevap_al(model, max_soru_seq_len):
    while True:
        soru = input("Soru sorun (Çıkmak için 'q' tuşuna basın): ")
        if soru.lower() == 'q':
            break

        soru_seq = tokenizer.texts_to_sequences([soru])
        if not soru_seq or not soru_seq[0]:
            print("Bu soru için bir cevap bulunamıyor. Daha fazla veri eklemeye devam edin.")
            cevap = input("Bunun hakkında beni bilgilendirebilir misin: ")
            egitim_verilerini_kaydet(soru, cevap)
            print("Bu bilgiyi öğrendiğim iyi oldu teşekkürler.")
        else:
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
            egitim_verilerini_kaydet(soru, "")
            print("Cevap:", last_cevap)


# Mevcut modeli yükleyin


# Eğitim verilerini çek
sorular, cevaplar = egitim_verilerini_cek()
model, x_train, y_train, max_soru_seq_len = model_olustur(sorular, cevaplar)
soru_sor_ve_cevap_al(model, max_soru_seq_len)
