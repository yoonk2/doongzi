# Generated by Django 4.0.3 on 2022-07-22 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doongzipedia', '0005_word_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='word_type',
            field=models.CharField(choices=[('starts_with', 'starts_with'), ('ends_with', 'ends_with'), ('contains', 'contains'), ('new_word', 'new_word')], default='starts_with', max_length=20),
        ),
    ]
