from django.contrib import admin

from apps.memory.models import ConversationSession, Message, UserMemory


@admin.register(ConversationSession)
class ConversationSessionAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "title", "is_active", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("title", "user__username")


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("id", "session", "role", "created_at")
    list_filter = ("role",)
    search_fields = ("content",)


@admin.register(UserMemory)
class UserMemoryAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "category", "content", "is_active", "confidence")
    list_filter = ("category", "is_active")
    search_fields = ("content",)
