# SYX Project - Sistema de Quejas para Entidades Públicas de Boyacá

## Descripción

SYX Project es una aplicación web que permite a los ciudadanos redactar y consultar quejas dirigidas a entidades públicas del departamento de Boyacá. El sistema cuenta con un frontend en React y un backend en Node.js/Express, utilizando PostgreSQL como base de datos.

## Características

- Redacción y envío de quejas a entidades públicas.
- Visualización de quejas existentes.
- Reportes de cantidad de quejas por entidad.
- Validación con Google reCAPTCHA.
- API RESTful documentada y testeada.

## Tecnologías

- **Frontend:** React (Vite), CSS Modules
- **Backend:** Node.js, Express, PostgreSQL, pg, dotenv
- **Base de datos:** PostgreSQL
- **Testing:** Jest, Supertest

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v13+ recomendado)
- (Opcional) [Git](https://git-scm.com/)

## Instalación y Configuración

### 1. Clonar el repositorio

```sh
git clone https://github.com/YesidMG/SYX_Project.git
cd SYX_Project
```

### 2. Configurar variables de entorno

#### Backend

Copia el archivo `.env.example` (si existe) o crea uno nuevo en `backend/.env` con el siguiente contenido:

```
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/syx_db
FRONTEND_URL=http://localhost:5173
PORT=3000
NODE_ENV=development
```

> Cambia `usuario`, `contraseña` y el nombre de la base de datos según tu configuración local.

#### Frontend

Crea un archivo `.env` en `frontend/.env`:

```
VITE_API_URL=http://localhost:3000/api
```

### 3. Instalar dependencias

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

### 4. Configurar la base de datos

- Crea la base de datos en PostgreSQL:

```sh
createdb syx_db
```

- Ejecuta el script de esquema y datos iniciales:

```sh
psql -d syx_db -f backend/src/config/schema.sql
```

### 5. Ejecutar el sistema

#### Terminal 1: Backend

```sh
cd backend
npm start
```

#### Terminal 2: Backend

```sh
cd frontend
npm run dev
```

- El frontend estará disponible en [http://localhost:5173](http://localhost:5173)
- El backend en [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

```
SYX_Project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   └── routes/
│   ├── public/
│   ├── tests/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── ...
```

## Pruebas

Para ejecutar los tests del backend:

```sh
cd backend
npm test
```

## Sistema desplegado
https://syx-project.onrender.com


