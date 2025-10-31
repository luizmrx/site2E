from django.contrib import admin
from .models import Lead

class LeadAdmin(admin.ModelAdmin):
    list_display = ('email', 'telefone', 'criado_em')
    list_filter = ('email', 'telefone')

admin.site.register(Lead, LeadAdmin)