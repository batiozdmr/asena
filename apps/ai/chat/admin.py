from django.contrib import admin
from apps.ai.chat.models import *

admin.site.register(Questions)
admin.site.register(EducationQuestionsAnswersType)


class EducationQuestionsAnswersAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer', 'type')
    list_filter = ('type',)
    search_fields = ('question', 'answer')
    list_editable = ('answer', 'type',)

    def remove_duplicate_questions(modeladmin, request, queryset):
        unique_questions = {}
        duplicates = []

        for item in queryset:
            question = item.question
            if question not in unique_questions:
                unique_questions[question] = item
            else:
                duplicates.append(item)

        for duplicate in duplicates:
            duplicate.delete()

    remove_duplicate_questions.short_description = "Tekrar Eden Soruları Temizle"  # Eylem adını belirtin

    actions = [remove_duplicate_questions]


admin.site.register(EducationQuestionsAnswers, EducationQuestionsAnswersAdmin)
