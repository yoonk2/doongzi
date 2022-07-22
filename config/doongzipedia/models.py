from django.db import models
import json

# Create your models here.
class Word(models.Model):
    TYPE_CHOICES = (
        ("starts_with", "starts_with"),
        ("ends_with", "ends_with"),
        ("contains", "contains"),
        ("new_word", "new_word"),
    )
    kor_word = models.CharField(max_length=100, verbose_name="한글 단어")
    eng_word = models.CharField(
        max_length=100, verbose_name="영어 단어", blank=True, null=True
    )
    definition = models.TextField(verbose_name="뜻")
    example = models.TextField(verbose_name="예문", blank=True, null=True)
    doong_position = models.CharField(
        max_length=200, verbose_name="둥 위치", blank=True, null=True
    )
    link = models.URLField(verbose_name="링크", blank=True, null=True)
    image = models.ImageField(upload_to="image/doongzipedia", blank=True, null=True)
    word_type = models.CharField(
        max_length=20, choices=TYPE_CHOICES, default="starts_with"
    )

    created_at = models.DateTimeField(auto_now_add=True, verbose_name="제작일")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.kor_word

    def set_doong(self, x):
        self.doong_position = json.dumps(x)

    def get_doong(self):
        return json.loads(self.doong_position)
