#!/usr/bin/env python
"""Konuşma verilerini LoRA eğitim formatına dönüştürür."""

import argparse
import json
from pathlib import Path


def load_jsonl(path):
    records = []
    with open(path, encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if line:
                records.append(json.loads(line))
    return records


def normalize_record(record):
    if "messages" in record:
        return {"messages": record["messages"]}

    if "instruction" in record and "output" in record:
        return {
            "messages": [
                {"role": "user", "content": record["instruction"]},
                {"role": "assistant", "content": record["output"]},
            ]
        }

    raise ValueError(f"Desteklenmeyen kayıt formatı: {record.keys()}")


def main():
    parser = argparse.ArgumentParser(description="Asena eğitim verisi hazırlayıcı")
    parser.add_argument(
        "--input-dir",
        default="training/data",
        help="Kaynak jsonl dosyalarının bulunduğu klasör",
    )
    parser.add_argument(
        "--output",
        default="training/data/combined_train.jsonl",
        help="Birleştirilmiş çıktı dosyası",
    )
    args = parser.parse_args()

    input_dir = Path(args.input_dir)
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    combined = []
    for jsonl_file in sorted(input_dir.glob("*.jsonl")):
        for record in load_jsonl(jsonl_file):
            combined.append(normalize_record(record))

    with open(output_path, "w", encoding="utf-8") as handle:
        for record in combined:
            handle.write(json.dumps(record, ensure_ascii=False) + "\n")

    print(f"{len(combined)} kayıt yazıldı -> {output_path}")


if __name__ == "__main__":
    main()
