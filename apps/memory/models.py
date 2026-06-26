from django.contrib import admin
from django.contrib.auth.models import User
from django.db import models


class ConversationSession(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_sessions")
    title = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-updated_at"]

    def __str__(self):
        return self.title or f"Oturum #{self.pk}"


class Message(models.Model):
    ROLE_USER = "user"
    ROLE_ASSISTANT = "assistant"
    ROLE_CHOICES = (
        (ROLE_USER, "Kullanıcı"),
        (ROLE_ASSISTANT, "Asistan"),
    )

    session = models.ForeignKey(
        ConversationSession,
        on_delete=models.CASCADE,
        related_name="messages",
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.role}: {self.content[:50]}"


class UserMemory(models.Model):
    CATEGORY_PREFERENCE = "preference"
    CATEGORY_FACT = "fact"
    CATEGORY_GOAL = "goal"
    CATEGORY_HABIT = "habit"
    CATEGORY_CHOICES = (
        (CATEGORY_PREFERENCE, "Tercih"),
        (CATEGORY_FACT, "Bilgi"),
        (CATEGORY_GOAL, "Hedef"),
        (CATEGORY_HABIT, "Alışkanlık"),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="memories")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default=CATEGORY_FACT)
    content = models.TextField()
    source_message = models.ForeignKey(
        Message,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="extracted_memories",
    )
    confidence = models.FloatField(default=1.0)
    is_active = models.BooleanField(default=True)
    chroma_id = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-updated_at"]

    def __str__(self):
        return self.content[:80]
