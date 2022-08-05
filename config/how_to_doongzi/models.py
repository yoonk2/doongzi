from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=100)
    creator = models.CharField(max_length=100, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    url = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title
