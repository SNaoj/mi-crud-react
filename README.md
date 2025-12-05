# mi‑crud‑react

## 📄 Descripción

`mi-crud-react` es una aplicación full‑stack de tipo CRUD — permite crear, listar, actualizar y eliminar usuarios — con frontend en React + Vite y un backend corriendo en Docker. La API provee los endpoints para gestionar usuarios, y el frontend consume esos endpoints para mostrar la interfaz.  

Ideal para aprender el flujo completo de desarrollo web: frontend ↔ API ↔ base de datos/contenedor.

---

## 🧰 Tecnologías usadas

- Frontend: React, Vite, JavaScript (o JSX), Hooks, Context API  
- Backend: API REST (dentro de Docker — tu configuración en `docker-compose`, o contenedores Docker)  
- Comunicación frontend ↔ backend: fetch / REST API  
- Gestión de estado de sesión: Context + localStorage (para persistir usuario autenticado)  

---

## 🚀 Cómo ejecutar el proyecto localmente

### 📝 Prerrequisitos

- Tener instalado [Node.js + npm]  
- Tener instalado [Docker] y [docker‑compose] (si usas contenedores para backend)  

### 🔧 Instalación & puesta en marcha

1. Clona el repositorio:

```bash
git clone https://github.com/SNaoj/mi-crud-react.git
cd mi-crud-react
Instalar dependencias del frontend:

bash
Copiar código
npm install
Levantar backend con Docker (si aplica):

bash
Copiar código
docker-compose up -d
Iniciar frontend:

bash
Copiar código
npm run dev
Abrir navegador en: http://localhost:5173/ (o la URL que indique Vite)

🧪 Funcionalidades implementadas (CRUD)
✅ Listar usuarios

✅ Crear usuario

✅ Editar usuario

✅ Eliminar usuario

✅ Persistencia de sesión (login simulado) con Context + localStorage

📂 Estructura del proyecto (simplificada)
graphql
Copiar código
mi-crud-react/
├── src/
│   ├── services/     # Lógica para consumir API (fetch)
│   ├── contexts/     # Contextos de React (ej: AuthContext)
│   ├── components/   # Componentes React reutilizables
│   ├── pages/        # Páginas de la app (lista, edición, creación, etc.)
│   └── App.jsx       # Punto de entrada de la app
├── docker-compose.yml  # Configuración de Docker para backend/API (si aplica)
├── package.json        # Dependencias del frontend
└── README.md           # Este archivo
(Ajusta según la estructura real de tu repo)

📈 Cómo probar la API manualmente
Puedes usar herramientas como curl, Postman o tu frontend. Ejemplos con curl:

bash
Copiar código
# Listar usuarios
curl http://localhost:8080/api/users

# Crear usuario
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan","email":"juan@example.com","password":"123456"}'

# Actualizar usuario (id = 1)
curl -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"NuevoNombre"}'

# Eliminar usuario (id = 1)
curl -X DELETE http://localhost:8080/api/users/1
✅ Qué falta / posibles mejoras
Autenticación real contra la API (en lugar de login simulado)

Manejo de errores en el frontend (mensajes claros al usuario)

Validaciones en formularios (crear/editar usuario)

Seguridad: no guardar contraseñas en texto, usar hashing, tokens, etc.

Documentar API con Swagger / OpenAPI (útil si crece el proyecto)

Tests unitarios / de integración (frontend y backend)

Deployment: desplegar en un servidor o plataforma en la nube

📄 Licencia & Autores
Este proyecto fue desarrollado por tu nombre o alias. Puedes adaptarlo o usarlo como base para otros proyectos.

📝 Cómo contribuir
Si deseas aportar, puedes:

Hacer fork del repositorio

Crear una rama nueva (git checkout -b feature/mi-nueva-feature)

Hacer commit con tus cambios y push a tu rama

Enviar un Pull Request describiendo el cambio


