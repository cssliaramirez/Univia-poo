# UniVía

Aplicación web para consultar la oferta académica de la Universidad APEC. Permite explorar escuelas y carreras, filtrar por escuela, buscar programas por nombre y consultar la información detallada de cada carrera.

## Funcionalidades

- Consultar escuelas o facultades.
- Consultar y buscar carreras.
- Filtrar carreras por escuela.
- Mostrar código, nombre, escuela, duración, modalidad y estado.
- Actualizar la información desde PostgreSQL.
- Mostrar estados de carga, resultados vacíos y errores.
- Consultar la salud de la API y la conexión con la base de datos.
- Documentación automática con Swagger y OpenAPI.

## Tecnologías

### Backend

- Java 21.
- Javalin 7.
- JDBC y PostgreSQL.
- HikariCP.
- Maven Wrapper.
- JUnit 5.

### Frontend

- HTML5.
- CSS3.
- JavaScript nativo con módulos ES.

### Despliegue

- Vercel Services.
- Contenedor Java 21 para el backend.
- Contenedor Nginx para el frontend.
- PostgreSQL alojado en Neon.

## Estructura

```text
.
├── backend/
│   ├── src/main/java/univia/
│   │   ├── config/
│   │   ├── database/
│   │   ├── entities/
│   │   ├── errors/
│   │   ├── modules/
│   │   └── repositories/
│   ├── src/main/resources/db/schema.sql
│   ├── Dockerfile.vercel
│   └── pom.xml
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── Dockerfile.vercel
│   └── index.html
├── vercel.json
└── README.md
```

## Requisitos locales

- JDK 21.
- PostgreSQL o una base compatible alojada en la nube.
- Python 3 para servir el frontend localmente.
- Docker Desktop únicamente si deseas probar los contenedores.
- Node.js y Vercel CLI para desplegar.

No necesitas instalar Maven globalmente porque el backend incluye Maven Wrapper.

## Variables de entorno

Copia el ejemplo y completa los valores correspondientes:

```powershell
Copy-Item backend\.env.example backend\.env
```

```text
APP_PORT=7000
APP_VERSION=dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=univia
DB_USER=postgres
DB_PASSWORD=change_me
DB_POOL_SIZE=5
DB_SSL_MODE=disable
DB_CHANNEL_BINDING=
```

El archivo `.env` contiene credenciales y no debe subirse al repositorio.

## Preparar la base de datos

El script `backend/src/main/resources/db/schema.sql` crea las tablas y carga los datos iniciales.

```powershell
cd backend
.\mvnw.cmd compile exec:java@migrate
```

La migración es idempotente y puede ejecutarse nuevamente para sincronizar los datos iniciales.

## Ejecutar localmente

Inicia el backend:

```powershell
cd backend
.\mvnw.cmd compile exec:java
```

En otra terminal, desde la raíz del proyecto, inicia el frontend:

```powershell
python -m http.server 5173 -d frontend
```

Abre `http://localhost:5173`.

## Rutas principales

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Estado de la API y PostgreSQL |
| `GET` | `/api/schools` | Lista de escuelas |
| `GET` | `/api/careers` | Lista y búsqueda de carreras |
| `GET` | `/api/careers/{id}` | Detalle de una carrera |
| `GET` | `/docs` | Swagger UI |
| `GET` | `/openapi` | Especificación OpenAPI |

Filtros disponibles:

```text
/api/careers?schoolId=1
/api/careers?name=software
/api/careers?schoolId=1&name=software
```

## Pruebas y compilación

```powershell
cd backend
.\mvnw.cmd test
.\mvnw.cmd package
```

## Desplegar en Vercel

El archivo `vercel.json` declara dos servicios bajo un mismo dominio:

- `/api/*`, `/docs` y `/openapi` se envían al backend.
- Las demás rutas se envían al frontend.

Vercel inyecta `PORT` automáticamente. En producción, el frontend utiliza `window.location.origin`, por lo que no necesita una dirección de API hardcodeada.

En Vercel configura estas variables para Production y Preview:

```text
APP_VERSION
DB_HOST
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD
DB_POOL_SIZE
DB_SSL_MODE
DB_CHANNEL_BINDING
```

Comandos de despliegue:

```powershell
vercel login
vercel link
vercel
vercel --prod
```
