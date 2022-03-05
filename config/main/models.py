from django.db import models

# Create your models here.

class Post(models.Model):
    kor_title = models.CharField(max_length=100, verbose_name='한글 제목')
    eng_title = models.CharField(max_length=100, verbose_name='영어 제목')
    kor_content = models.TextField(verbose_name='한글 내용')
    eng_content = models.TextField(verbose_name='영어 내용')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='제작일')
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to="image", blank=True)