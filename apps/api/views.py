from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from transformers import LlamaTokenizer, LlamaForCausalLM


def asena(question=""):
    if question:
        model_name = "./llama3-lora-finetuned"
        tokenizer = LlamaTokenizer.from_pretrained(model_name)
        model = LlamaForCausalLM.from_pretrained(model_name)

        # Modeli değerlendirme moduna al
        model.eval()

        # Input'u tokenize et
        inputs = tokenizer(question, return_tensors="pt")

        # Modelden metin üretimi yap
        output = model.generate(
            inputs["input_ids"],
            max_length=100,  # Üretilecek maksimum token sayısı
            num_beams=5,  # Beam Search için beam sayısı
            no_repeat_ngram_size=2,  # Aynı ngram'ın tekrarını engeller
            early_stopping=True  # Erken durdurmayı açar
        )

        # Üretilen metni çöz
        generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
        return generated_text
    else:
        return "Merhaba ben Asena, size nasıl yardımcı olabilirim?"


@csrf_exempt
def chat(request):
    question = request.POST.get('question')
    answer = asena(question=question)

    response_data = {'content': answer}
    return JsonResponse(response_data)
