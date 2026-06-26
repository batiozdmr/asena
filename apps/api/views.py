import logging
import re

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from apps.api.services.model_service import generate_response
from apps.api.services.prompt_builder import build_messages
from apps.memory.models import ConversationSession, Message
from apps.memory.services.extractor import process_conversation_turn
from apps.memory.services.memory_service import get_relevant_memories
from apps.profile.models import Profile

logger = logging.getLogger("asena")


def _clean_question(raw_question):
    if not raw_question:
        return ""
    text = re.sub(r"<br\s*/?>", "\n", raw_question, flags=re.IGNORECASE)
    text = re.sub(r"<[^>]+>", "", text)
    return text.strip()


def _get_or_create_session(user, session_id=None):
    if session_id:
        session = ConversationSession.objects.filter(
            id=session_id,
            user=user,
            is_active=True,
        ).first()
        if session:
            return session

    return ConversationSession.objects.create(user=user, title="")


def _update_session_title(session, question):
    if not session.title and question:
        session.title = question[:200]
        session.save(update_fields=["title", "updated_at"])


@csrf_exempt
@require_http_methods(["POST"])
def chat(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Giriş yapmanız gerekiyor."}, status=401)

    question = _clean_question(request.POST.get("question"))
    if not question:
        return JsonResponse({"content": "Merhaba ben Asena, size nasıl yardımcı olabilirim?"})

    try:
        Profile.objects.get_or_create(user=request.user)

        session_id = request.POST.get("session_id")
        session = _get_or_create_session(request.user, session_id=session_id)

        history = list(session.messages.all())
        memories = get_relevant_memories(request.user, question)
        messages = build_messages(request.user, history, memories, question)

        answer = generate_response(messages)

        user_message = Message.objects.create(
            session=session,
            role=Message.ROLE_USER,
            content=question,
        )
        Message.objects.create(
            session=session,
            role=Message.ROLE_ASSISTANT,
            content=answer,
        )
        _update_session_title(session, question)
        session.save(update_fields=["updated_at"])

        try:
            process_conversation_turn(
                request.user,
                question,
                answer,
                source_message=user_message,
            )
        except Exception:
            logger.exception("Memory extraction failed user=%s", request.user.username)

        preview = question.replace("\n", " ")[:40]
        request.asena_log = f'chat="{preview}" session={session.id}'

        return JsonResponse(
            {
                "content": answer,
                "session_id": session.id,
            }
        )
    except Exception as exc:
        logger.exception("CHAT error user=%s: %s", request.user.username, exc)
        return JsonResponse(
            {"error": "Asena şu anda cevap üretemedi.", "detail": str(exc)},
            status=500,
        )


def _require_auth_json(view_func):
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return JsonResponse({"error": "Giriş yapmanız gerekiyor."}, status=401)
        return view_func(request, *args, **kwargs)

    return wrapper


@_require_auth_json
@require_http_methods(["GET"])
def session_list(request):
    sessions = ConversationSession.objects.filter(
        user=request.user,
        is_active=True,
    ).order_by("-updated_at")[:50]

    data = [
        {
            "id": session.id,
            "title": session.title or f"Konuşma #{session.id}",
            "updated_at": session.updated_at.isoformat(),
        }
        for session in sessions
    ]
    return JsonResponse({"sessions": data})


@_require_auth_json
@require_http_methods(["GET"])
def session_messages(request, session_id):
    session = ConversationSession.objects.filter(
        id=session_id,
        user=request.user,
    ).first()
    if not session:
        return JsonResponse({"error": "Oturum bulunamadı."}, status=404)

    messages = [
        {
            "role": message.role,
            "content": message.content,
            "created_at": message.created_at.isoformat(),
        }
        for message in session.messages.all()
    ]
    return JsonResponse({"session_id": session.id, "messages": messages})


@_require_auth_json
@require_http_methods(["POST"])
def session_create(request):
    session = ConversationSession.objects.create(user=request.user, title="Yeni konuşma")
    return JsonResponse({"session_id": session.id, "title": session.title})


@_require_auth_json
@require_http_methods(["POST"])
def session_delete(request, session_id):
    session = ConversationSession.objects.filter(
        id=session_id,
        user=request.user,
    ).first()
    if not session:
        return JsonResponse({"error": "Oturum bulunamadı."}, status=404)

    session.is_active = False
    session.save(update_fields=["is_active"])
    return JsonResponse({"success": True})


@require_http_methods(["GET"])
def health(request):
    return JsonResponse({"status": "ok"})
