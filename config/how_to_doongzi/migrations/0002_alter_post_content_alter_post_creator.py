# Generated by Django 4.0.3 on 2022-08-05 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('how_to_doongzi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='creator',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
