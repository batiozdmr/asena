from django.contrib.auth.models import User
from django.db import models
from mptt.models import MPTTModel

from apps.common.mixins import AuditMixin
from apps.common.oneTextField import OneTextField


# Create your models here.


class Questions(AuditMixin, MPTTModel):
    parent = models.ForeignKey("self", null=True, blank=True, related_name="children", on_delete=models.CASCADE,
                               verbose_name='Üst Soru')
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.text)


class EducationQuestionsAnswersType(OneTextField):
    def __str__(self):
        return str(self.text)


class EducationQuestionsAnswers(AuditMixin):
    question = models.TextField(verbose_name='Soru')
    answer = models.TextField(verbose_name='Cevap')
    type = models.ForeignKey(EducationQuestionsAnswersType, on_delete=models.CASCADE, verbose_name='Türü')

    def __str__(self):
        return str(self.question)
