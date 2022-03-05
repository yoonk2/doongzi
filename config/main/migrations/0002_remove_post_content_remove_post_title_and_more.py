# Generated by Django 4.0.3 on 2022-03-05 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='content',
        ),
        migrations.RemoveField(
            model_name='post',
            name='title',
        ),
        migrations.AddField(
            model_name='post',
            name='eng_content',
            field=models.TextField(default=1, verbose_name='영어 내용'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='eng_title',
            field=models.CharField(default=1, max_length=100, verbose_name='영어 제목'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='kor_content',
            field=models.TextField(default=1, verbose_name='한글 내용'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='kor_title',
            field=models.CharField(default=1, max_length=100, verbose_name='한글 제목'),
            preserve_default=False,
        ),
    ]
