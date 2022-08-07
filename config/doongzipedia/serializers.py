from rest_framework import serializers
from .models import Word


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = (
            "id",
            "kor_word",
            "eng_word",
            "definition",
            "example",
            "doong_position",
            "link",
            "image",
            "word_type",
            "likes",
        )
