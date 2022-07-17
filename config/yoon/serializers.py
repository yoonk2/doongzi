from rest_framework import serializers
from .models import Support


class SupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Support
        fields = ("name", "message", "created_at")
