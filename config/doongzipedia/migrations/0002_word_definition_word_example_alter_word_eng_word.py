# Generated by Django 4.0.3 on 2022-07-22 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doongzipedia', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='definition',
            field=models.TextField(default='둥', verbose_name='뜻'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='word',
            name='example',
            field=models.TextField(blank=True, null=True, verbose_name='예문'),
        ),
        migrations.AlterField(
            model_name='word',
            name='eng_word',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='영어 단어'),
        ),
    ]
