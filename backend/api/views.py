from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LeadSerializer
from .models import Lead

class LeadCreateView(APIView):
    def post(self, request):
        serializer = LeadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'mensagem': 'Lead salvo com sucesso!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def listar_newsletter(request):
    clientes = Lead.objects.all().order_by('-criado_em')
    serializer = LeadSerializer(clientes, many=True)
    return Response(serializer.data)
