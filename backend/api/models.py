from django.db import models

class Lead(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    cep = models.CharField(default="", max_length=9, null=False)  # formato "12345-678"
    telefone = models.CharField(max_length=20, blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    
    class Meta:
        ordering = ['-criado_em']