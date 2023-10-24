# Kelimeleri ve özelliklerini tanımlayalım
kelimeler = [
    {"kelime": "katılmak", "ozellikler": "P:Verb; A:Causative_t, Aorist_I, Passive_In"},
    {"kelime": "göre", "ozellikler": "P:Postp, PCDat"},
    {"kelime": "yarın", "ozellikler": "P:Noun, Time"},
    {"kelime": "ne", "ozellikler": "P:Adj; A:NoVoicing"},
    {"kelime": "bir", "ozellikler": "P:Det"},
    {"kelime": "düşünmek", "ozellikler": "P:Verb; A:Aorist_I"}
]

# Kelimeleri özelliklerine göre ayrıştıralım
kelime_dict = {}
for kelime_info in kelimeler:
    kelime = kelime_info["kelime"]
    ozellikler = kelime_info["ozellikler"].split("; ")
    kelime_dict[kelime] = ozellikler

# Cümleyi oluşturalım
cumle = f"{kelime_dict['yarın']} {kelime_dict['ne']} {kelime_dict['bir']} {kelime_dict['düşünmek']} {kelime_dict['katılmak']} {kelime_dict['göre']}."

# Sonucu ekrana basalım
print(cumle.capitalize())
