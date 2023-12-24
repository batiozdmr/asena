from django.urls import path

from apps.api.views import chat

urlpatterns = [
    path('asena/', chat, name='chat'),
]