from django.db import models
from ..mixins.audit import AuditMixin
from django.utils.translation import gettext_lazy as _


class OneTextField(AuditMixin):
    """
    to store model data which has only one field desc
    """
    text = models.CharField(max_length=200, null=True, verbose_name=_('Başlık'))

    class Meta:
        abstract = True

    def __str__(self):
        return self.text
