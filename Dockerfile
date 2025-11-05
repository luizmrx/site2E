FROM python:3.12-slim

WORKDIR /app

# Variáveis de ambiente
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Dependências do sistema (incluindo nginx)
RUN apt-get update && apt-get install -y \
    build-essential libpq-dev nginx && \
    rm -rf /var/lib/apt/lists/*

# Copia requirements
COPY backend/requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt gunicorn

# Copia Django
COPY backend/ ./backend
COPY backend/dist/ ./backend/staticfiles/

WORKDIR /app/backend

# Coleta static
RUN python manage.py collectstatic --noinput

# Copia configuração do Nginx
COPY nginx.conf /etc/nginx/sites-enabled/default

# Expõe porta
EXPOSE 80

# CMD: roda Gunicorn + Nginx
CMD ["sh", "-c", "gunicorn setup.wsgi:application --bind 127.0.0.1:8000 --workers 3 & nginx -g 'daemon off;'"]
