# Generated by Django 3.2.22 on 2023-10-31 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='token',
            name='token',
            field=models.CharField(default=True, max_length=100),
        ),
    ]
