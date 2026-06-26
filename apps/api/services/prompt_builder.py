from django.conf import settings


SYSTEM_PROMPT = (
    "Sen Asena'sın. Kullanıcının kişisel yapay zeka asistanısın. "
    "Jarvis gibi nazik, proaktif ve güvenilir davran. "
    "Türkçe konuş. Kullanıcı hakkında bildiklerini doğal şekilde kullan."
)


from apps.profile.models import Profile


def build_profile_context(user):
    lines = []
    profile = Profile.objects.filter(user=user).first()
    if profile is None:
        return lines

    full_name = profile.get_full_name()
    if full_name:
        lines.append(f"- Adı: {full_name}")

    age = profile.age()
    if age is not None:
        lines.append(f"- Yaşı: {age}")

    if profile.bio:
        lines.append(f"- Biyografi: {profile.bio}")

    if profile.phoneNumber:
        lines.append(f"- Telefon: {profile.phoneNumber}")

    return lines


def build_messages(user, history, memories, current_question):
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]

    context_parts = []

    profile_lines = build_profile_context(user)
    if profile_lines:
        context_parts.append("[Kullanıcı Profili]\n" + "\n".join(profile_lines))

    if memories:
        memory_lines = [f"- {memory.content}" for memory in memories]
        context_parts.append("[Kullanıcı Hakkında Bilinenler]\n" + "\n".join(memory_lines))

    if context_parts:
        messages.append(
            {
                "role": "system",
                "content": "\n\n".join(context_parts),
            }
        )

    max_messages = getattr(settings, "ASENA_MAX_CONTEXT_MESSAGES", 20)
    for message in history[-max_messages:]:
        messages.append(
            {
                "role": message.role,
                "content": message.content,
            }
        )

    messages.append({"role": "user", "content": current_question})
    return messages
