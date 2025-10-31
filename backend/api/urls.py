from django.urls import path
from .views import LeadCreateView, listar_newsletter

urlpatterns = [
    path('leads/', LeadCreateView.as_view(), name='create-lead'), # api/leads/
    path('listar/', listar_newsletter, name='listar_newsletter'), # api/listar/
]
