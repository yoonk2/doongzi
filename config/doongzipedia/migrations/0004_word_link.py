# Generated by Django 4.0.3 on 2022-07-22 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doongzipedia', '0003_alter_word_doong_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='link',
            field=models.URLField(blank=True, null=True, verbose_name='링크'),
        ),
    ]
