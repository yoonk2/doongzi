# Generated by Django 4.0.3 on 2022-04-04 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_post_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='positionX',
            field=models.IntegerField(blank=True, default=50, null=True, verbose_name='X위치'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='positionY',
            field=models.IntegerField(blank=True, default=50, null=True, verbose_name='Y위치'),
        ),
    ]
