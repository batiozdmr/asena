# Generated by Django 3.2.22 on 2023-10-26 08:58

import apps.common.fileUpload.userPath
import apps.common.fileUpload.validate
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('parameter', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('created_by', models.CharField(blank=True, editable=False, max_length=100, null=True)),
                ('updated_by', models.CharField(blank=True, editable=False, max_length=255, null=True)),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to=apps.common.fileUpload.userPath.userDirectoryPath, validators=[apps.common.fileUpload.validate.validateFileExtensionPhoto], verbose_name='Profil Resmi / Logo')),
                ('banner_image', models.ImageField(blank=True, null=True, upload_to=apps.common.fileUpload.userPath.userDirectoryPath, validators=[apps.common.fileUpload.validate.validateFileExtensionPhoto], verbose_name='Banner Resmi')),
                ('bio', models.TextField(blank=True, null=True, verbose_name='Biyografi')),
                ('birthday', models.CharField(max_length=15, null=True, validators=[django.core.validators.RegexValidator(message="Lütfen doğru formatta giriniz: 'gg.aa.yyyy' ", regex='^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')], verbose_name='Doğum Tarihi')),
                ('phoneNumber', models.CharField(blank=True, max_length=15, null=True, validators=[django.core.validators.RegexValidator(message="Lütfen doğru formatta giriniz: '+901234567890' ", regex='^\\+?1?\\d{9,15}$')], verbose_name='Cep Telefonu')),
                ('slug', models.SlugField(blank=True, editable=False, max_length=500, null=True)),
                ('verification_code', models.IntegerField(blank=True, null=True)),
                ('verification_code_expiration', models.DateTimeField(blank=True, null=True)),
                ('is_online', models.BooleanField(choices=[(True, 'Aktif'), (False, 'Dışarda')], default=False, verbose_name='Online Mı?')),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='parameter.country', verbose_name='Ülke')),
                ('district', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='parameter.district', verbose_name='İlçe')),
                ('province', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='parameter.province', verbose_name='İl')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Kullanıcı')),
            ],
            options={
                'verbose_name': 'Profil',
                'verbose_name_plural': 'Profil',
                'permissions': (('liste', 'Listeleme Yetkisi'), ('sil', 'Silme Yetkisi'), ('ekle', 'Ekleme Yetkisi'), ('guncelle', 'Güncelleme Yetkisi')),
                'default_permissions': (),
            },
        ),
    ]
