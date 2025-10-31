from django.contrib import admin
from .models import Artigo

class ArtigoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_publicacao')
    list_editable = ('data_publicacao',)
    list_filter = ('data_publicacao',)  # filtro lateral para datas
    list_per_page = 10
    search_fields = ('titulo',)         # pesquisa pelo título
    ordering = ('-data_publicacao',)    # ordena por data decrescente


admin.site.register(Artigo, ArtigoAdmin)