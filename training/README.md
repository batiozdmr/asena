# Asena LoRA Eğitimi

Bu klasör, Asena'nın kişilik katmanını (Jarvis tarzı ton) eğitmek için kullanılır.

## Adımlar

1. `training/data/personality.jsonl` ve `training/data/user_examples.jsonl` dosyalarına örnek diyaloglar ekleyin.
2. Veriyi birleştirin:

```bash
python training/prepare_dataset.py
```

3. QLoRA eğitimini başlatın (CUDA gerekir):

```bash
python training/finetune_lora.py --epochs 3
```

4. Çıktı `llama3-lora-finetuned/` klasörüne kaydedilir.
5. Gerçek model için mock modu kapatın:

```bash
set ASENA_USE_MOCK_MODEL=0
```

## Notlar

- 8 GB VRAM için `batch_size=1` ve `gradient_accumulation_steps=8` kullanılır.
- RAG hafıza bu eğitimden bağımsızdır; kullanıcı bilgileri ChromaDB'de tutulur.
- Llama modeli için HuggingFace erişimi ve lisans kabulü gerekir.
