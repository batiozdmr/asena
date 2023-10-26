from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import Group, User
from django.contrib.sites.models import Site
from django.db import models
from django.utils.translation import gettext as _
from mptt.models import MPTTModel

from ..common.fileUpload.userPath import userDirectoryPath
from ..common.mixins.audit import AuditMixin
from ..common.oneTextField import OneTextField
from ..common.seo.seo import SeoModel


class SiteSettings(AuditMixin, SeoModel):
    site = models.OneToOneField(Site, related_name="settings", on_delete=models.CASCADE, verbose_name='Site')

    text = models.CharField(max_length=400, verbose_name=_('Firma Adı'), blank=True)
    copyright = RichTextUploadingField(default="", blank=True, verbose_name=_('copyright'))
    footer_about = RichTextUploadingField(default="", blank=True, verbose_name=_('Footer Hakkımıza'))
    logo = models.ImageField(upload_to=userDirectoryPath, null=True, verbose_name=_('Logo'),
                             blank=True)
    dark_logo = models.ImageField(upload_to=userDirectoryPath, null=True, verbose_name=_('Dark Logo'),
                                  blank=True)
    footer_logo = models.ImageField(upload_to=userDirectoryPath, null=True, verbose_name=_('Footer Logo'),
                                    blank=True)
    dark_footer_logo = models.ImageField(upload_to=userDirectoryPath, null=True, verbose_name=_('Dark Footer Logo'),
                                         blank=True)
    favicon = models.ImageField(upload_to=userDirectoryPath, null=True, verbose_name=_('Fav İcon'),
                                blank=True)

    cookie_text = RichTextUploadingField(default="", blank=True, verbose_name=_('Çerez Metni'))
    phone = models.CharField(max_length=200, blank=True, verbose_name='Telefon')
    email = models.EmailField(blank=True, verbose_name='E-Posta')
    address = models.TextField(null=True, blank=True, verbose_name='Açık Adres')
    map = models.TextField(null=True, blank=True, verbose_name=_('Harita '))

    facebook = models.URLField(max_length=120, blank=True, verbose_name=_('Facebook'))
    twitter = models.URLField(max_length=120, blank=True, verbose_name=_('Twitter'))
    instagram = models.URLField(max_length=120, blank=True, verbose_name=_('Instagram'))
    linkedin = models.URLField(max_length=120, blank=True, verbose_name=_('linkedin'))

    default_profile_image = models.ImageField(upload_to=userDirectoryPath, null=True,
                                              verbose_name=_('Default Profil Resmi'))
    bot_icon = models.ImageField(upload_to=userDirectoryPath, null=True,
                                 verbose_name=_('Bot Resmi'))

    @property
    def logo_url(self):
        if self.logo and hasattr(self.logo, 'url'):
            return self.logo.url

    @property
    def favicon_url(self):
        if self.favicon and hasattr(self.favicon, 'url'):
            return self.favicon.url

    @property
    def keywords_list(self):
        my_string = self.seo_keywords
        keywords_list = [x.strip() for x in my_string.split(',')]

        return keywords_list

    def __str__(self):
        return str(self.text)

    class Meta:
        verbose_name = 'Site Ayarları'
        verbose_name_plural = 'Site Ayarları'
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


class Icon(OneTextField):
    class Meta:
        verbose_name = 'İcon'
        verbose_name_plural = 'İcon'
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


class MenuType(OneTextField):

    def __str__(self):
        return str(self.text)

    class Meta:
        verbose_name = 'Menü Tipi'
        verbose_name_plural = 'Menü Tipi'
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


class Menu(MPTTModel):
    parent = models.ForeignKey("self", null=True, blank=True, related_name="children", on_delete=models.CASCADE,
                               verbose_name='Üst Menü')
    menu_type = models.ForeignKey(MenuType, blank=True, on_delete=models.PROTECT, null=True,
                                  verbose_name='Menü Tipi')
    name = models.CharField(max_length=250, verbose_name='Başlık')
    link = models.CharField(max_length=200, blank=True, null=True, verbose_name="Link")
    alignment = models.IntegerField(null=True, blank=True, verbose_name='Sıralama')

    def __str__(self):
        if self.menu_type:
            return str(self.name) + " | " + str(self.menu_type.text)
        else:
            return str(self.name)

    class Meta:
        verbose_name = 'Menü'
        verbose_name_plural = 'Menü'
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


class Slider(OneTextField):
    image = models.ImageField(upload_to=userDirectoryPath, null=True, blank=True, verbose_name='Görsel')
    active = models.BooleanField(null=True, blank=True, verbose_name='Sayfada Görünsün')
    alignment = models.IntegerField(null=True, blank=True, unique=True, verbose_name='Sıralama')

    @property
    def get_image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url

    def __str__(self):
        return str(self.text)

    class Meta:
        verbose_name = 'Slider'
        verbose_name_plural = 'Slider'
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


# Address
class Country(models.Model):
    text = models.CharField(max_length=200, null=True, verbose_name=_('Başlık'))
    rewrite = models.CharField(max_length=200, blank=True, null=True, verbose_name=_('Kısaltması'))
    area_code = models.IntegerField(blank=True, null=True, verbose_name=_('Alan Kodu'))
    alignment = models.IntegerField(null=True, blank=True, verbose_name=_('Sıralama'))

    def __str__(self):
        return self.text

    class Meta:
        ordering = ('text',)
        verbose_name = _('Ülke')
        verbose_name_plural = _('Ülke')
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


class Province(models.Model):
    text = models.CharField(max_length=200, null=True, verbose_name=_('Başlık'))
    country = models.ForeignKey(Country, on_delete=models.CASCADE, verbose_name=_('Ülke'))
    code = models.CharField(max_length=15, null=True, verbose_name=_('İl Kodu'))

    def __str__(self):
        return self.text

    class Meta:
        ordering = ('text',)
        verbose_name = _('İl')
        verbose_name_plural = _('İl')
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))


class District(OneTextField):
    province = models.ForeignKey(Province, on_delete=models.CASCADE, verbose_name=_('İl'))

    def __str__(self):
        return self.text

    class Meta:
        ordering = ('text',)
        verbose_name = _('İlçe')
        verbose_name_plural = _('İlçe')
        default_permissions = ()
        permissions = ((_('liste'), _('Listeleme Yetkisi')),
                       (_('sil'), _('Silme Yetkisi')),
                       (_('ekle'), _('Ekleme Yetkisi')),
                       (_('guncelle'), _('Güncelleme Yetkisi')))
