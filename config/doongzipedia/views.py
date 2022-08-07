from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import WordSerializer
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.http import Http404
from django.shortcuts import redirect

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


def word_like(request, pk):
    word = Word.objects.get(pk=pk)
    word.likes += 1
    word.save()
    return redirect("projects:index")
