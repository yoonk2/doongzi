from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SupportSerializer
from .models import Support

# Create your views here.


class SupportView(viewsets.ModelViewSet):
    serializer_class = SupportSerializer
    queryset = Support.objects.all()
