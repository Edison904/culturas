# Deployment a Railway

## Pasos para desplegar el backend en Railway.app

### 1. Crear cuenta en Railway
- Ve a https://railway.app
- Registrate con GitHub (vincula tu cuenta)

### 2. Crear nuevo proyecto
- Click en "+ New Project"
- Selecciona "Deploy from GitHub repo"
- Busca y selecciona `Edison904/culturas`

### 3. Configurar variables de entorno
En Railway Dashboard > Project Settings > Variables:

```
DJANGO_SECRET_KEY=tu-clave-secreta-super-larga-aqui
DEBUG=False
ALLOWED_HOSTS=your-railway-domain.railway.app
DATABASE_URL=postgresql://... (Railway la genera automáticamente si añades PostgreSQL)
CORS_ALLOWED_ORIGINS=https://culturas-mse8.vercel.app
ANTHROPIC_API_KEY=sk-ant-tu-clave-aqui
```

### 4. Añadir PostgreSQL
- En Railway: "+ Add" > "PostgreSQL"
- Vercel asignará automáticamente `DATABASE_URL`

### 5. Deploy
- Railway auto-detectará `Procfile` y hará deploy automático
- Espera a que el servidor esté "Running"

### 6. Obtener URL del backend
- En Railway: Deployment > Domains
- Copia la URL (ej: `https://culturas-backend.railway.app`)

### 7. Configurar Vercel Frontend
- Ve a Vercel Dashboard > Settings > Environment Variables
- Añade: `VITE_API_URL=https://culturas-backend.railway.app` (sin trailing slash)
- Espera a que Vercel recompile automáticamente

### Resultado final
- Frontend: https://culturas-mse8.vercel.app
- Backend: https://culturas-backend.railway.app
- Comunicación: ✅ Funcionando

## Troubleshooting
- Si la API devuelve 500: Revisa logs en Railway Dashboard
- Si CORS falla: Verifica que `CORS_ALLOWED_ORIGINS` incluya el dominio correcto de Vercel
- Si PostgreSQL no conecta: Confirma que `DATABASE_URL` esté en variables de entorno
