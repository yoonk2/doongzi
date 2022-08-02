from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import WordSerializer

# Create your views here.
def index(request):
    words = Word.objects.all()
    ctx = {
        "words": words,
    }
    return render(request, "frontend/build/index.html", context=ctx)


class WordView(viewsets.ModelViewSet):
    serializer_class = WordSerializer
    queryset = Word.objects.all()
