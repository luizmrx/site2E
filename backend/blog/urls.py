from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import ArtigoViewSet

router = DefaultRouter()
router.register(r'artigos', ArtigoViewSet, basename='artigos')

# urlpatterns = [
#     path('', include(router.urls)), # blog/artigos/     blog/artigo/{id}
# ]

urlpatterns = router.urls