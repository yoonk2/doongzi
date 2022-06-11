# Generated by Django 4.0.3 on 2022-06-11 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Credit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='제목')),
                ('content', models.TextField(blank=True, verbose_name='내용')),
                ('person', models.CharField(max_length=100, verbose_name='담당자')),
                ('image', models.ImageField(blank=True, upload_to='image/gir1s-generation')),
            ],
        ),
    ]
