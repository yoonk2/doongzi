# Generated by Django 4.0.3 on 2022-08-07 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doongzipedia', '0006_word_word_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]