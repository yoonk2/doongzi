from django.db import models

# Create your models here.
class Support(models.Model):
    name = models.CharField(max_length=100, verbose_name="응원자", blank=True, null=True)
    message = models.CharField(
        max_length=100, verbose_name="응원메시지", blank=True, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="작성일")

    def __str__(self):
        return str(self.id)
