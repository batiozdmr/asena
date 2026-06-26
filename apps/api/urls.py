from django.urls import path

from apps.api.views import chat, health, session_create, session_delete, session_list, session_messages

urlpatterns = [
    path("health/", health, name="health"),
    path("asena/", chat, name="chat"),
    path("sessions/", session_list, name="session_list"),
    path("sessions/new/", session_create, name="session_create"),
    path("sessions/<int:session_id>/messages/", session_messages, name="session_messages"),
    path("sessions/<int:session_id>/delete/", session_delete, name="session_delete"),
]
