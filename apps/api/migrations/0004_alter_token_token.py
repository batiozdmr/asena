# Generated by Django 3.2.22 on 2023-10-31 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_token_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='token',
            name='token',
            field=models.TextField(blank=True, max_length=100),
        ),
    ]
