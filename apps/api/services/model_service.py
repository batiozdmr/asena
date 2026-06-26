import logging
import os
import threading

from django.conf import settings

logger = logging.getLogger(__name__)

_lock = threading.Lock()
_model = None
_tokenizer = None


def _use_mock_model():
    return getattr(settings, "ASENA_USE_MOCK_MODEL", False)


def _lora_path_exists():
    lora_path = getattr(settings, "ASENA_LORA_PATH", "")
    return lora_path and os.path.isdir(lora_path)


def _load_model():
    global _model, _tokenizer

    if _use_mock_model():
        logger.info("Asena mock model modu aktif.")
        return None, None

    import sys

    import torch
    from transformers import AutoModelForCausalLM, AutoTokenizer

    model_path = settings.ASENA_MODEL_PATH
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    load_kwargs = {"device_map": "auto"}
    use_quantization = sys.platform != "win32"

    if use_quantization:
        try:
            from transformers import BitsAndBytesConfig

            load_kwargs["quantization_config"] = BitsAndBytesConfig(
                load_in_4bit=True,
                bnb_4bit_quant_type="nf4",
                bnb_4bit_compute_dtype=torch.float16,
            )
        except ImportError:
            logger.warning("bitsandbytes bulunamadı, tam hassasiyetle yükleniyor.")
            use_quantization = False

    if not use_quantization:
        load_kwargs["torch_dtype"] = torch.float16 if torch.cuda.is_available() else torch.float32

    model = AutoModelForCausalLM.from_pretrained(model_path, **load_kwargs)

    if _lora_path_exists():
        from peft import PeftModel

        model = PeftModel.from_pretrained(model, settings.ASENA_LORA_PATH)
        logger.info("LoRA adapter yüklendi: %s", settings.ASENA_LORA_PATH)

    model.eval()
    return model, tokenizer


def get_model_and_tokenizer():
    global _model, _tokenizer

    if _model is not None and _tokenizer is not None:
        return _model, _tokenizer

    if _use_mock_model():
        return None, None

    with _lock:
        if _model is None or _tokenizer is None:
            logger.info("Asena modeli yükleniyor...")
            _model, _tokenizer = _load_model()
            logger.info("Asena modeli hazır.")

    return _model, _tokenizer


def generate_response(messages, max_new_tokens=None):
    max_new_tokens = max_new_tokens or settings.ASENA_MAX_NEW_TOKENS

    if _use_mock_model():
        user_text = ""
        for message in reversed(messages):
            if message.get("role") == "user":
                user_text = message.get("content", "")
                break
        return (
            f"Merhaba, ben Asena. (Mock mod) Mesajınızı aldım: {user_text[:200]}"
            if user_text
            else "Merhaba ben Asena, size nasıl yardımcı olabilirim?"
        )

    import torch

    model, tokenizer = get_model_and_tokenizer()

    if hasattr(tokenizer, "apply_chat_template"):
        prompt = tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True,
        )
    else:
        parts = []
        for message in messages:
            role = message["role"].capitalize()
            parts.append(f"{role}: {message['content']}")
        parts.append("Assistant:")
        prompt = "\n".join(parts)

    inputs = tokenizer(prompt, return_tensors="pt")
    if hasattr(model, "device"):
        inputs = {key: value.to(model.device) for key, value in inputs.items()}

    with torch.no_grad():
        output = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            do_sample=True,
            temperature=0.7,
            top_p=0.9,
            pad_token_id=tokenizer.pad_token_id,
            eos_token_id=tokenizer.eos_token_id,
        )

    generated = tokenizer.decode(
        output[0][inputs["input_ids"].shape[-1]:],
        skip_special_tokens=True,
    )
    return generated.strip()
