# 🌍 Culturas - Landing Page & Chat Application

Plataforma interactiva sobre culturas del mundo con chatbot inteligente impulsado por IA.

## 🚀 Stack Tecnológico

### Frontend
- **React 19** + Vite
- **CSS3** con animaciones personalizadas
- **Contexto API** para estado global
- **Vite** para bundling rápido

### Backend
- **Django 6.0** + Django REST Framework
- **PostgreSQL** (producción)
- **Claude AI** (Anthropic API)
- **CORS Headers** para comunicación frontend-backend

### Deployment
- **Frontend**: Vercel
- **Backend**: Railway / Render

---

## 📋 Configuración Local

### Prerrequisitos
- Python 3.11+
- Node.js 20+
- Git

### 1. Clonar el repositorio
```bash
git clone https://github.com/Edison904/culturas.git
cd culturas
```

### 2. Configurar Backend

```bash
cd backend

# Crear virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Crear archivo .env (basado en .env.example)
cp .env.example .env

# Ejecutar migraciones
python manage.py migrate

# Crear superusuario (opcional)
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver
```

Backend disponible en: `http://localhost:8000`

### 3. Configurar Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Crear archivo .env.local
echo "VITE_API_URL=http://localhost:8000" > .env.local

# Iniciar servidor de desarrollo
npm run dev
```

Frontend disponible en: `http://localhost:5173`

---

## 🌐 Deployment en Producción

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones completas de deployment.

### Resumen Rápido

1. **Frontend (Vercel)**
   - Conecta tu repo de GitHub
   - Variables: `VITE_API_URL=<tu-backend-url>`
   - Build: Automático

2. **Backend (Railway/Render)**
   - Conecta tu repo de GitHub
   - Apunta al directorio `backend/`
   - Configura variables de entorno
   - Deploy: Automático desde `main` branch

---

## 🔧 Variables de Entorno

### Backend `.env`
```
DEBUG=False
DJANGO_SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1,yourdomain.com
CORS_ALLOWED_ORIGINS=http://localhost:5173,https://your-frontend.vercel.app
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=postgresql://user:password@host:5432/db
```

### Frontend `.env.local` / `.env.production`
```
VITE_API_URL=http://localhost:8000  # Desarrollo
VITE_API_URL=https://your-backend.com  # Producción
```

---

## 📚 Estructura del Proyecto

```
culturas/
├── backend/
│   ├── config/              # Configuración Django
│   ├── culturas/            # App principal
│   ├── media/               # Archivos de paisajes
│   ├── manage.py
│   ├── requirements.txt
│   ├── runtime.txt
│   └── .env                 # Variables (no versionar)
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── context/         # Context API
│   │   ├── api.js           # Cliente HTTP
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env.local           # Variables (no versionar)
│
├── vercel.json              # Configuración de Vercel
├── Procfile                 # Configuración de Railway/Render
└── DEPLOYMENT.md            # Guía de deployment
```

---

## 🤖 API Endpoints

### Paises
- `GET /api/paises/` - Obtener lista de paises

### Chat
- `POST /api/chat/` - Enviar mensaje al chatbot

---

## 🔐 Seguridad

- ✅ Variables de entorno para secretos
- ✅ CORS configurado
- ✅ DEBUG deshabilitado en producción
- ✅ SECRET_KEY segura
- ✅ .env en .gitignore

---

## 📝 Licencia

MIT - Ver [LICENSE](./LICENSE)

---

## 👤 Autor

Edison Díaz - [@Edison904](https://github.com/Edison904)
