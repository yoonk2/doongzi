# Generated by Django 4.0.3 on 2022-07-22 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doongzipedia', '0004_word_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='image/doongzipedia'),
        ),
    ]
