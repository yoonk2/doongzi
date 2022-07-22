from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
    words = Word.objects.all()
    ctx = {
        "words": words,
    }
    return render(request, "doongzipedia.html", context=ctx)
