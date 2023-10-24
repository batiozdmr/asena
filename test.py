import requests
from bs4 import BeautifulSoup
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
import sys

# Veritabanı bağlantısı oluşturun
engine = create_engine('sqlite:///konusma_veritabani.db')

# Tabloyu tanımlayın (örnek olarak "konusma_verileri" tablosu)
Base = declarative_base()


class KonusmaVerileri(Base):
    __tablename__ = 'konusma_verileri'
    id = Column(Integer, primary_key=True)
    kullanici_girdisi = Column(String)
    model_cevabi = Column(String)


# Veritabanı işlem oturumunu başlatın
Session = sessionmaker(bind=engine)
session = Session()

count = 0
while True:
    count += 1
    sys.stdout.write("\r{}".format(count))
    sys.stdout.flush()
    # Wikipedia'nın rastgele sayfasının URL'si
    url = "https://tr.wikipedia.org/wiki/%C3%96zel:Rastgele"

    # Web sayfasını getirin
    response = requests.get(url)

    # HTML içeriğini çekin
    html = response.content

    # BeautifulSoup ile HTML'i ayrıştırın
    soup = BeautifulSoup(html, 'html.parser')

    # Tabloyu bulun
    table = soup.find('table', {'class': 'infobox'})

    # Tabloyu metin haline getirin
    table_text = table.get_text() if table else "Tablo bulunamadı."

    # <p> etiketlerini bulun
    p_tags = soup.find_all('p')

    # <p> etiketlerini metin haline getirin
    p_text = "\n\n".join([p.get_text() for p in p_tags])

    # Başlık etiketini seçin
    title_tag = soup.find('span', {'class': 'mw-page-title-main'})

    if title_tag:
        # Başlık etiketinin içeriğini çekin
        title_text = title_tag.get_text()
    else:
        title_text = ""
    # Sonucu yazdırın
    # print(title_text)
    # print(table_text)
    # print(p_text)

    # Aynı girdinin veritabanında olup olmadığını kontrol et
    var_mi = session.query(KonusmaVerileri).filter_by(kullanici_girdisi=title_text).first()

    if not var_mi:
        # title_text'i kontrol edin
        if title_text:
            # title_text de doluysa devam edin
            if p_text and table_text:
                # Hem p_text hem de table_text doluysa birleştirip kaydedin
                veri_kaydi = KonusmaVerileri(kullanici_girdisi=title_text, model_cevabi=p_text + table_text)
            elif p_text:
                # Sadece p_text doluysa p_text'i kaydedin
                veri_kaydi = KonusmaVerileri(kullanici_girdisi=title_text, model_cevabi=p_text)
            elif table_text:
                # Sadece table_text doluysa table_text'i kaydedin
                veri_kaydi = KonusmaVerileri(kullanici_girdisi=title_text, model_cevabi=table_text)
            else:
                # title_text dolu ama p_text ve table_text boşsa gerektiği gibi bir işlem yapabilirsiniz
                veri_kaydi = ""
                pass

            # Veriyi veritabanına ekleyin (eğer veri_kaydi tanımlıysa)
            if veri_kaydi:
                session.add(veri_kaydi)
                session.commit()
