from .models import Artigo
from rest_framework import viewsets
from .serializers import ArtigoSerializer
from .pagination import ArtigoPagination

class ArtigoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Artigo.objects.all().order_by('-data_publicacao')
    serializer_class = ArtigoSerializer
    pagination_class = ArtigoPagination
