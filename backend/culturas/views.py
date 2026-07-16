from rest_framework import viewsets

from .models import Pais
from .serializers import PaisSerializer


class PaisViewSet(viewsets.ReadOnlyModelViewSet):
    lookup_field = "clave"
    queryset = Pais.objects.prefetch_related("comidas", "paisajes").all()
    serializer_class = PaisSerializer
