from email.mime import image
from django.db import models

# Create your models here.
class Credit(models.Model):
    title = models.CharField(max_length=100, verbose_name='제목')
    content = models.TextField(verbose_name='내용', blank=True)
    person = models.CharField(max_length=100, verbose_name='담당자')
    image = models.ImageField(upload_to="image/gir1s-generation", blank=True)

    def __str__(self):
        return self.title+"/"+self.person