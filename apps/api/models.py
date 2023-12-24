import random
import string

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.crypto import get_random_string


class Token(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.TextField(max_length=100, blank=True)
    expiration_date = models.DateTimeField()

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        if not self.token:
            characters = string.ascii_uppercase + string.digits  # Sadece büyük harf ve rakamları içerir
            formatted_token = 'ASENA' + ''.join(random.choice(characters) for _ in range(64))
            self.token = formatted_token
        super(Token, self).save(*args, **kwargs)
