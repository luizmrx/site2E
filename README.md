# ⭐ Site 2E — Full Stack Platform (Django + React)

![Django](https://img.shields.io/badge/Django-5.2.4-green?logo=django)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)
![Python](https://img.shields.io/badge/Python-3.12-yellow?logo=python)

---

## 🧠 Case de Produto — 2E Platform

O Site 2E é uma aplicação full-stack desenvolvida como versão anterior do sistema digital da empresa 2E.

O objetivo da plataforma é centralizar captação de leads e gerenciamento de conteúdo com arquitetura desacoplada.

---

## 🎯 Problema Resolvido

Antes da plataforma, o processo era manual e descentralizado.

Com o sistema:

- Centralização de leads
- Automação de contatos
- API estruturada
- Painel Django Admin

---


## 🏗️ Arquitetura do Sistema

```text
Frontend (React + Vite)
        │
        │ HTTP + JWT
        ▼
Backend (Django REST Framework)
        │
        ▼
Database (SQLite / PostgreSQL)
````

---

## 🧱 Stack Tecnológica

### Backend

* Django 5.2.4
* Django REST Framework 3.16.0
* Simple JWT
* Python 3.12
* SQLite / PostgreSQL

### Frontend

* React 19.1.0
* React Router DOM 7.7.1
* Vite 7.0.4
* FontAwesome 7.0.0

### Infraestrutura

* Docker
* Nginx
* Gunicorn

---

## ⚙️ Funcionalidades

### 📌 Leads

* Cadastro de leads
* CRUD completo via API
* Registro automático de criação

### 📝 Blog

* Criação de artigos
* Upload de imagem de capa
* Paginação de conteúdo

---

## 🔐 Autenticação (JWT)

Fluxo de autenticação:

```text
1. Login
POST /api/token/
→ access + refresh token

2. Requisições autenticadas
Authorization: Bearer <token>

3. Refresh token
POST /api/token/refresh/
```

---

## 🔌 API REST

### Leads

```
GET    /api/leads/
POST   /api/leads/
GET    /api/leads/{id}/
PUT    /api/leads/{id}/
DELETE /api/leads/{id}/
```

### Blog

```
GET    /api/blog/artigos/
POST   /api/blog/artigos/
GET    /api/blog/artigos/{id}/
PUT    /api/blog/artigos/{id}/
DELETE /api/blog/artigos/{id}/
```

---

## 🚀 Como Executar o Projeto

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Docker

```bash
docker build -t site2e .
docker run -p 8000:8000 site2e
```

---

## 🗂 Estrutura do Projeto

```
backend/
├── api/
├── blog/
├── setup/
├── manage.py
└── requirements.txt

frontend/
├── src/
├── App.jsx
└── main.jsx
```

---

## 🔐 Segurança

* JWT Authentication
* CORS configurado
* Variáveis de ambiente (.env)
* Senhas criptografadas
* Controle de DEBUG por ambiente

---

## 🧠 Decisões Técnicas

* Django + DRF para backend escalável
* React para interface moderna
* Vite para build rápido
* JWT para autenticação stateless
* Arquitetura desacoplada frontend/backend

---

## 🔮 Melhorias Futuras

* PostgreSQL em produção
* Redis cache
* Celery para tarefas assíncronas
* Testes automatizados (Pytest + Jest)
* Deploy em cloud (AWS / Render)
* Login social (Google OAuth)
* Rate limiting na API

---

## 📌 Licença

Projeto proprietário da empresa 2E. Todos os direitos reservados.

---

## 📅 Última atualização

24 de Junho de 2026
