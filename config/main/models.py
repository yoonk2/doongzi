from django.db import models

# Create your models here.

class Post(models.Model):
    kor_title = models.CharField(max_length=100, verbose_name='한글 제목')
    eng_title = models.CharField(max_length=100, verbose_name='영어 제목')
    kor_content = models.TextField(verbose_name='한글 내용')
    eng_content = models.TextField(verbose_name='영어 내용')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='제작일')
    updated_at = models.DateTimeField(auto_now=True)
    iframe = models.TextField(verbose_name='iframe', blank=True)
    image = models.ImageField(upload_to="image", blank=True)
    url = models.URLField(verbose_name='url', blank=True)

    def __str__(self):
        return self.eng_title

class Comment(models.Model):
    content = models.TextField(verbose_name='내용')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='제작일')
    color = models.CharField(max_length=10, verbose_name='색상', blank=True, null=True)
    positionX = models.CharField(max_length=10, verbose_name='X위치', blank=True, null=True)
    positionY = models.CharField(max_length=10, verbose_name='Y위치', blank=True, null=True)