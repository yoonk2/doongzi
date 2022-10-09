from email.mime import image
from django.db import models

# Create your models here.
class Credit(models.Model):
    title = models.CharField(max_length=100, verbose_name="제목")
    content = models.TextField(verbose_name="내용", blank=True)
    person = models.CharField(max_length=100, verbose_name="담당자")
    image = models.ImageField(upload_to="image/gir1s-generation", blank=True)

    def __str__(self):
        return self.title + "/" + self.person


class Support(models.Model):
    name = models.CharField(max_length=100, verbose_name="응원자", blank=True, null=True)
    message = models.CharField(
        max_length=100, verbose_name="응원메시지", blank=True, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="작성일")

    def __str__(self):
        return self.id


class People(models.Model):
    kor_name = models.CharField(max_length=100, verbose_name="한글이름")
    eng_name = models.CharField(max_length=100, verbose_name="영문이름")
    image = models.CharField(max_length=100, blank=True)
    domain = models.TextField(verbose_name="하는 일", blank=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="작성일")
    phone = models.CharField(max_length=100, verbose_name="전화번호", blank=True)
    email = models.CharField(max_length=100, verbose_name="이메일", blank=True)
    ig = models.CharField(max_length=100, verbose_name="인스타그램 아이디", blank=True)

    def __str__(self):
        return self.kor_name + "/" + self.eng_name
