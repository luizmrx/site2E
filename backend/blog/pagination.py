from rest_framework.pagination import PageNumberPagination

class ArtigoPagination(PageNumberPagination):
    page_size = 10  # Exibe 10 artigos por página
    page_size_query_param = 'page_size'
    max_page_size = 50