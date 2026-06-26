#!/usr/bin/env python
"""Asena kişilik katmanı için QLoRA fine-tune scripti (8 GB VRAM)."""

import argparse
import json
from pathlib import Path

import torch
from datasets import Dataset
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from trl import SFTTrainer


SYSTEM_PROMPT = (
    "Sen Asena'sın. Kullanıcının kişisel yapay zeka asistanısın. "
    "Jarvis gibi nazik, proaktif ve güvenilir davran. Türkçe konuş."
)


def load_dataset(path):
    records = []
    with open(path, encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if line:
                records.append(json.loads(line))
    return Dataset.from_list(records)


def format_example(tokenizer, example):
    messages = example.get("messages", [])
    if not messages or messages[0].get("role") != "system":
        messages = [{"role": "system", "content": SYSTEM_PROMPT}] + messages
    return {
        "text": tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=False,
        )
    }


def main():
    parser = argparse.ArgumentParser(description="Asena QLoRA fine-tune")
    parser.add_argument(
        "--base-model",
        default="meta-llama/Llama-3.2-3B-Instruct",
        help="Temel instruct model",
    )
    parser.add_argument(
        "--dataset",
        default="training/data/combined_train.jsonl",
        help="Eğitim verisi",
    )
    parser.add_argument(
        "--output-dir",
        default="llama3-lora-finetuned",
        help="LoRA adapter çıktı klasörü",
    )
    parser.add_argument("--epochs", type=int, default=3)
    parser.add_argument("--lr", type=float, default=2e-4)
    args = parser.parse_args()

    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.float16,
    )

    tokenizer = AutoTokenizer.from_pretrained(args.base_model)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    model = AutoModelForCausalLM.from_pretrained(
        args.base_model,
        quantization_config=bnb_config,
        device_map="auto",
    )
    model = prepare_model_for_kbit_training(model)

    lora_config = LoraConfig(
        r=16,
        lora_alpha=32,
        lora_dropout=0.05,
        bias="none",
        task_type="CAUSAL_LM",
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    )
    model = get_peft_model(model, lora_config)

    dataset = load_dataset(args.dataset)
    dataset = dataset.map(lambda row: format_example(tokenizer, row))

    training_args = TrainingArguments(
        output_dir="training/checkpoints",
        num_train_epochs=args.epochs,
        per_device_train_batch_size=1,
        gradient_accumulation_steps=8,
        learning_rate=args.lr,
        logging_steps=10,
        save_strategy="epoch",
        fp16=torch.cuda.is_available(),
        optim="paged_adamw_8bit",
        report_to="none",
    )

    trainer = SFTTrainer(
        model=model,
        train_dataset=dataset,
        args=training_args,
        processing_class=tokenizer,
    )
    trainer.train()

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    model.save_pretrained(output_dir)
    tokenizer.save_pretrained(output_dir)
    print(f"LoRA adapter kaydedildi: {output_dir}")


if __name__ == "__main__":
    main()
