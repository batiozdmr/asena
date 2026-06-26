import json
import logging
import re

from apps.memory.models import UserMemory
from apps.memory.services.vector_store import add_memory_to_index, remove_memory_from_index

logger = logging.getLogger(__name__)


EXTRACTION_PROMPT = """Aşağıdaki konuşmadan kullanıcı hakkında kalıcı bilgi çıkar.
Sadece JSON dizisi döndür. Bilgi yoksa [] döndür.

Kategoriler: preference, fact, goal, habit

Örnek çıktı:
[
  {{"category": "habit", "content": "Sabahları koşuya çıkar"}},
  {{"category": "goal", "content": "Python öğreniyor"}}
]

Konuşma:
Kullanıcı: {user_message}
Asistan: {assistant_message}
"""


def _parse_memories(raw_text):
    raw_text = raw_text.strip()
    if not raw_text:
        return []

    try:
        data = json.loads(raw_text)
        if isinstance(data, list):
            return data
    except json.JSONDecodeError:
        pass

    match = re.search(r"\[.*\]", raw_text, re.DOTALL)
    if not match:
        return []

    try:
        data = json.loads(match.group())
        if isinstance(data, list):
            return data
    except json.JSONDecodeError:
        logger.warning("Bilgi çıkarma JSON parse hatası.")
    return []


def extract_memories_from_exchange(user_message, assistant_message):
    from apps.api.services.model_service import generate_response

    prompt = EXTRACTION_PROMPT.format(
        user_message=user_message,
        assistant_message=assistant_message,
    )
    messages = [
        {
            "role": "system",
            "content": "Sen bir bilgi çıkarma asistanısın. Sadece geçerli JSON döndür.",
        },
        {"role": "user", "content": prompt},
    ]
    raw = generate_response(messages, max_new_tokens=256)
    return _parse_memories(raw)


def _deactivate_conflicting_memories(user, new_content):
    similar = UserMemory.objects.filter(
        user=user,
        is_active=True,
        content__icontains=new_content[:40],
    )
    for memory in similar:
        if memory.content != new_content:
            memory.is_active = False
            memory.save(update_fields=["is_active", "updated_at"])
            if memory.chroma_id:
                remove_memory_from_index(user.id, memory.pk)


def save_extracted_memories(user, extracted_items, source_message=None):
    saved = []
    for item in extracted_items:
        content = (item.get("content") or "").strip()
        if not content:
            continue

        category = item.get("category", UserMemory.CATEGORY_FACT)
        if category not in dict(UserMemory.CATEGORY_CHOICES):
            category = UserMemory.CATEGORY_FACT

        existing = UserMemory.objects.filter(
            user=user,
            content=content,
            is_active=True,
        ).first()
        if existing:
            continue

        _deactivate_conflicting_memories(user, content)

        memory = UserMemory.objects.create(
            user=user,
            category=category,
            content=content,
            source_message=source_message,
            confidence=float(item.get("confidence", 1.0)),
        )
        memory.chroma_id = str(memory.pk)
        memory.save(update_fields=["chroma_id"])

        add_memory_to_index(
            user.id,
            memory.pk,
            memory.content,
            metadata={"category": memory.category},
        )
        saved.append(memory)

    return saved


def process_conversation_turn(user, user_message, assistant_message, source_message=None):
    extracted = extract_memories_from_exchange(user_message, assistant_message)
    return save_extracted_memories(user, extracted, source_message=source_message)
