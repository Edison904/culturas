from rest_framework import serializers

from .models import Comida, Pais, Paisaje


class ComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comida
        fields = ["id", "glifo", "nombre", "texto"]


class PaisajeSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True, allow_null=True)

    class Meta:
        model = Paisaje
        fields = ["id", "titulo", "ubicacion", "epoca", "descripcion", "imagen"]


class PaisSerializer(serializers.ModelSerializer):
    comidas = ComidaSerializer(many=True, read_only=True)
    paisajes = PaisajeSerializer(many=True, read_only=True)

    class Meta:
        model = Pais
        fields = [
            "id",
            "clave",
            "nombre",
            "glifo",
            "acento",
            "lema",
            "intro",
            "cultura_titulo",
            "cultura_texto",
            "paisajes_titulo",
            "comidas",
            "paisajes",
        ]
