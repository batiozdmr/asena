from datetime import datetime, date

from autoslug.settings import slugify
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _

from apps.common.fileUpload.userPath import userDirectoryPath
from apps.common.fileUpload.validate import validateFileExtensionPhoto
from apps.common.mixins import AuditMixin
from apps.common.oneTextField import OneTextField
from apps.parameter.models import Province, Country, District, SiteSettings

BOOL_CHOICES = ((True, _('Aktif')), (False, _('Dışarda')))


class Profile(AuditMixin):
    user = models.OneToOneField(User, on_delete=models.PROTECT, verbose_name=_('Kullanıcı'))

    profile_image = models.ImageField(upload_to=userDirectoryPath, validators=[validateFileExtensionPhoto], blank=True,
                                      null=True, verbose_name=_('Profil Resmi / Logo'))

    banner_image = models.ImageField(upload_to=userDirectoryPath, validators=[validateFileExtensionPhoto], blank=True,
                                     null=True, verbose_name=_('Banner Resmi'))
    bio = models.TextField(null=True, blank=True, verbose_name=_('Biyografi'))

    birthdayRegex = RegexValidator(
        regex=r'^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$',
        message="Lütfen doğru formatta giriniz: 'gg.aa.yyyy' ")

    birthday = models.CharField(validators=[birthdayRegex], max_length=15, null=True, verbose_name=_('Doğum Tarihi'))

    phoneNumberRegex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                      message=_("Lütfen doğru formatta giriniz: '+901234567890' "))

    phoneNumber = models.CharField(validators=[phoneNumberRegex], max_length=15, null=True, blank=True,
                                   verbose_name=_('Cep Telefonu'))

    country = models.ForeignKey(Country, null=True, blank=True, on_delete=models.CASCADE, verbose_name=_('Ülke'))
    province = models.ForeignKey(Province, null=True, blank=True, on_delete=models.CASCADE, verbose_name=_('İl'))
    district = models.ForeignKey(District, null=True, blank=True, on_delete=models.CASCADE, verbose_name=_('İlçe'))

    slug = models.SlugField(max_length=500, null=True, blank=True, editable=False)

    verification_code = models.IntegerField(blank=True, null=True)
    verification_code_expiration = models.DateTimeField(blank=True, null=True)
    is_online = models.BooleanField(choices=BOOL_CHOICES,default=False, verbose_name=_("Online Mı?"))

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        self.slug = slugify(str(int(self.user.id) + 1000))
        super(Profile, self).save(*args, **kwargs)

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        if self.user.first_name and self.user.last_name:
            full_name = '%s %s' % (self.user.first_name, self.user.last_name)
        else:
            full_name = self.user.username
        return full_name.strip()

    def age(self):
        if self.birthday:
            birthdate = datetime.strptime(self.birthday, '%d.%m.%Y').date()
            today = date.today()
            age = today.year - birthdate.year

            # Check if the user hasn't had their birthday this year yet
            if today.month < birthdate.month or (today.month == birthdate.month and today.day < birthdate.day):
                age -= 1

            return age
        return None

    @property
    def get_profile_image_url(self):
        if self.profile_image and hasattr(self.profile_image, 'url'):
            return self.profile_image
        else:
            return SiteSettings.objects.first().default_profile_image

    @property
    def get_banner_image_url(self):
        if self.banner_image and hasattr(self.banner_image, 'url'):
            return self.banner_image
        else:
            return SiteSettings.objects.first().default_banner_image

    def getEmail(self):
        return self.user.email

    getEmail.short_description = "Email"

    def secret_name(self, user_id):
        if user_id == self.user.id:
            first_name = self.user.first_name
            last_name = self.user.last_name
            return first_name + " " + last_name
        else:
            first_name = self.user.first_name
            last_name = self.user.last_name
            return first_name + " " + last_name[0] + '*' * (len(last_name) - 1)

    def online_control(self):
        if self.is_online == "True":
            text = _("Son Görülme Şimdi")
        else:
            text = _("Son Görülme Yakınlarda")
        return text

    class Meta:
        verbose_name = _('Profil')
        verbose_name_plural = _('Profil')
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))
