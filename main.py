import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

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

# Veritabanından soruları alın ve boş olanları filtreleyin
sorular = session.query(SorularCevaplar.kullanici_girdisi).all()
sorular = [soru[0] for soru in sorular if soru[0] is not None]

# Veritabanından cevapları alın ve boş olanları filtreleyin
cevaplar = session.query(SorularCevaplar.model_cevabi).all()
cevaplar = [cevap[0] for cevap in cevaplar if cevap[0] is not None]

filtered_sorular = []
filtered_cevaplar = []

for soru, cevap in zip(sorular, cevaplar):
    if cevap.strip() != "":
        filtered_sorular.append(soru)
        filtered_cevaplar.append(cevap)


def yeni_soru_ekle(soru_metni):
    if soru_metni not in sorular:
        yeni_soru = SorularCevaplar(kullanici_girdisi=soru_metni)
        session.add(yeni_soru)
        session.commit()


# Tokenizer kullanarak metin verilerini işleme
tokenizer = Tokenizer()
tokenizer.fit_on_texts(filtered_sorular + filtered_cevaplar)
kelime_indexleri = tokenizer.word_index
ters_kelime_indexleri = dict([(value, key) for (key, value) in kelime_indexleri.items()])

# Metinleri sayılara dönüştürme
sorular_seq = tokenizer.texts_to_sequences(filtered_sorular)
cevaplar_seq = tokenizer.texts_to_sequences(filtered_cevaplar)

# Girdi ve çıkış verilerini hazırlama
max_soru_seq_len = max(len(seq) for seq in sorular_seq)
x_train = pad_sequences(sorular_seq, maxlen=max_soru_seq_len, padding='post')

# Çıkış verilerini uygun hale getirme
cevaplar_seq_padded = pad_sequences(cevaplar_seq, maxlen=max_soru_seq_len, padding='post')
y_train = np.zeros_like(cevaplar_seq_padded)
y_train[:, :-1] = cevaplar_seq_padded[:, 1:]

# Modeli oluşturma
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(input_dim=len(kelime_indexleri) + 1, output_dim=128, input_length=max_soru_seq_len),
    tf.keras.layers.LSTM(256, return_sequences=True),
    tf.keras.layers.Dense(len(kelime_indexleri) + 1, activation='softmax')
])


model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.summary()

# Modeli eğitme
model.fit(x_train, y_train, epochs=1000, verbose=2)

# Soru sorma ve cevap alma
while True:
    soru = input("Soru sorun (Çıkmak için 'q' tuşuna basın): ")
    if soru.lower() == 'q':
        break
    yeni_soru_ekle(soru)
    soru_seq = tokenizer.texts_to_sequences([soru])
    soru_seq = pad_sequences(soru_seq, maxlen=max_soru_seq_len, padding='post')
    cevap_seq = model.predict(soru_seq)
    cevap = ""
    for seq in cevap_seq[0]:
        kelime_indexi = np.argmax(seq)
        kelime = ters_kelime_indexleri.get(kelime_indexi, "")
        if kelime:
            cevap += kelime + " "
    if cevap:
        last_cevap = cevap
    else:
        last_cevap = "Bunu henüz öğrenemedim beni geliştirmeye devam ederseniz öğrenebilirim."
    print("Cevap:", last_cevap)
