# Configuración de Vercel para Culturas App

## Variables de entorno necesarias en Vercel

En el dashboard de Vercel, ve a **Settings > Environment Variables** y agrega:

### Para el Frontend (Vercel)
```
VITE_API_URL=https://tu-backend-url.com
```

### Para el Backend (Railway/Render)

**Base de datos**
- `DATABASE_URL=postgresql://user:password@host:5432/culturas`

**Django**
- `DJANGO_SECRET_KEY=your-strong-secret-key-here`
- `DEBUG=False`
- `ALLOWED_HOSTS=tu-backend-url.com,www.tu-backend-url.com`

**CORS**
- `CORS_ALLOWED_ORIGINS=https://tu-app.vercel.app,https://www.tu-app.com`

**API Keys**
- `ANTHROPIC_API_KEY=sk-ant-...`

## Pasos para desplegar:

### 1. Frontend en Vercel
✅ Ya está configurado con el archivo `vercel.json`

### 2. Backend en Railway/Render
1. Conecta tu repo a Railway o Render
2. Asegúrate que la variable `Root Directory` apunta a `backend/`
3. Configura las variables de entorno del paso anterior
4. Deploy automático desde `main` branch

### 3. Actualizar URLs
- Cambiar `VITE_API_URL` en Vercel Environment Variables al URL del backend
- Actualizar `CORS_ALLOWED_ORIGINS` en backend para que incluya el dominio de Vercel
