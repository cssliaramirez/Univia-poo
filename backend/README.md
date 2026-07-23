# UniVía API

Backend REST para consultar escuelas o facultades y sus carreras universitarias. Está desarrollado con Java, Javalin, JDBC y PostgreSQL.

## Funcionalidades

- Consultar todas las escuelas o facultades.
- Consultar todas las carreras.
- Filtrar carreras por escuela.
- Buscar carreras por nombre.
- Combinar el filtro de escuela con la búsqueda por nombre.
- Consultar la información detallada de una carrera.
- Comprobar el estado de la aplicación y de PostgreSQL.
- Recargar la información repitiendo las solicitudes `GET`.
- Responder con mensajes de error en español.
- Generar documentación OpenAPI y Swagger automáticamente.

Las búsquedas sin coincidencias responden con una lista vacía (`[]`). No se implementaron operaciones de creación, edición o eliminación.

## Requisitos

Antes de iniciar el proyecto necesitas:

- Java Development Kit (JDK) 21.
- PostgreSQL.
- Una terminal PowerShell, CMD, Bash o equivalente.
- Conexión a Internet durante la primera compilación para descargar Maven y las dependencias.

Maven no necesita instalarse globalmente porque el proyecto incluye Maven Wrapper.

Verifica Java y PostgreSQL con:

```powershell
java -version
psql --version
```

La salida de Java debe indicar la versión 21. Si `psql` no está disponible, también puedes administrar PostgreSQL mediante pgAdmin.

## Tecnologías y dependencias

- Java 21.
- Javalin 7.2.2.
- Javalin OpenAPI y Swagger 7.2.2.
- PostgreSQL JDBC Driver 42.7.7.
- HikariCP 7.0.2 para el pool de conexiones.
- dotenv-java 3.2.0 para cargar `.env`.
- JUnit 5 para las pruebas.
- Maven Shade Plugin para generar un JAR ejecutable.

Las versiones están declaradas en `pom.xml`.

## Estructura

```text
backend/
├── .mvn/                     # Configuración de Maven Wrapper
├── src/
│   ├── main/
│   │   ├── java/univia/
│   │   │   ├── config/       # Variables de entorno
│   │   │   ├── database/     # Conexión y pool de PostgreSQL
│   │   │   ├── entities/     # School, Career y enumeraciones
│   │   │   ├── errors/       # Excepciones y respuestas de error
│   │   │   ├── repositories/ # Queries y mapeo JDBC
│   │   │   └── modules/
│   │   │       ├── health/
│   │   │       ├── schools/
│   │   │       └── careers/
│   │   └── resources/db/
│   │       └── schema.sql     # Estructura y datos iniciales de UNAPEC
│   └── test/                  # Pruebas automatizadas
├── .env.example
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
```

## Instalación

Todos los comandos siguientes deben ejecutarse desde la carpeta `backend`:

```powershell
cd backend
```

### 1. Configurar las variables de entorno

El proyecto carga las variables desde `backend/.env`. Si el archivo todavía no existe, créalo desde el ejemplo.

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Linux o macOS:

```bash
cp .env.example .env
```

Edita `.env` con tus credenciales:

```env
APP_PORT=7000
APP_VERSION=dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=univia
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_POOL_SIZE=5
DB_SSL_MODE=disable
DB_CHANNEL_BINDING=
```

| Variable | Descripción | Valor de ejemplo |
| --- | --- | --- |
| `APP_PORT` | Puerto HTTP de la aplicación | `7000` |
| `APP_VERSION` | Versión mostrada por health | `dev` |
| `DB_HOST` | Servidor de PostgreSQL | `localhost` |
| `DB_PORT` | Puerto de PostgreSQL | `5432` |
| `DB_NAME` | Nombre de la base de datos | `univia` |
| `DB_USER` | Usuario de PostgreSQL | `postgres` |
| `DB_PASSWORD` | Contraseña del usuario | `tu_contraseña` |
| `DB_POOL_SIZE` | Máximo de conexiones simultáneas | `5` |
| `DB_SSL_MODE` | Modo SSL de PostgreSQL | `disable` o `require` |
| `DB_CHANNEL_BINDING` | Protección adicional para conexiones compatibles | vacío o `require` |

Las variables configuradas directamente en el sistema operativo tienen prioridad sobre `.env`. El archivo `.env` está ignorado por Git y no debe contenerse en el ZIP público si utiliza credenciales reales.

### 2. Crear la base de datos

Con PostgreSQL iniciado, crea la base de datos:

```powershell
psql -U postgres -c "CREATE DATABASE univia;"
```

Después ejecuta el esquema:

```powershell
psql -U postgres -d univia -f src/main/resources/db/schema.sql
```

PostgreSQL solicitará la contraseña del usuario cuando sea necesario.

Con pgAdmin:

1. Crea una base de datos llamada `univia`.
2. Selecciona la base de datos.
3. Abre **Query Tool**.
4. Copia y ejecuta el contenido de `src/main/resources/db/schema.sql`.

El esquema crea las tablas `schools` y `careers`, su relación, los índices de búsqueda y los datos iniciales de la oferta académica de UNAPEC: 12 escuelas y 43 programas de grado o técnico superior. El archivo es idempotente y puede ejecutarse nuevamente sin duplicar registros.

También puedes ejecutar el esquema mediante JDBC, usando la conexión configurada en `.env`:

```powershell
.\mvnw.cmd compile exec:java@migrate
```

### 3. Descargar las dependencias

Windows:

```powershell
.\mvnw.cmd dependency:go-offline
```

Linux o macOS:

```bash
chmod +x mvnw
./mvnw dependency:go-offline
```

Este paso es opcional. Los comandos `test`, `compile` y `package` también descargan automáticamente cualquier dependencia faltante.

## Modo desarrollo

Para compilar y ejecutar directamente la clase principal sin crear primero el JAR:

Windows:

```powershell
.\mvnw.cmd compile exec:java
```

Linux o macOS:

```bash
./mvnw compile exec:java
```

También puedes ejecutar `univia.Application` mediante el botón **Run** del IDE. Configura el directorio de trabajo como la carpeta `backend` para que pueda encontrar `.env`.

Javalin no incluye recarga automática. Después de modificar el código, detén el servidor con `Ctrl+C` y vuelve a ejecutar el comando.

## Pruebas

Ejecutar todas las pruebas:

Windows:

```powershell
.\mvnw.cmd test
```

Linux o macOS:

```bash
./mvnw test
```

Limpiar archivos compilados y ejecutar nuevamente las pruebas:

```powershell
.\mvnw.cmd clean test
```

Los reportes quedan en `target/surefire-reports`.

## Compilar para distribución

Genera el JAR ejecutable con:

Windows:

```powershell
.\mvnw.cmd clean package
```

Linux o macOS:

```bash
./mvnw clean package
```

El archivo resultante será:

```text
target/univia-api.jar
```

Para compilar sin ejecutar pruebas:

```powershell
.\mvnw.cmd clean package -DskipTests
```

## Ejecutar el JAR

```powershell
java -jar target/univia-api.jar
```

Cuando la aplicación inicia correctamente, queda disponible en:

```text
http://localhost:7000
```

El puerto cambia si modificas `APP_PORT`.

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Comprueba la aplicación y PostgreSQL |
| `GET` | `/api/schools` | Devuelve todas las escuelas |
| `GET` | `/api/careers` | Devuelve todas las carreras |
| `GET` | `/api/careers?schoolId=1` | Filtra carreras por escuela |
| `GET` | `/api/careers?name=software` | Busca carreras por nombre |
| `GET` | `/api/careers?schoolId=1&name=software` | Combina ambos filtros |
| `GET` | `/api/careers/{id}` | Devuelve una carrera por ID |

La búsqueda por nombre no distingue mayúsculas de minúsculas y permite coincidencias parciales.

### Ejemplos con PowerShell

```powershell
Invoke-RestMethod http://localhost:7000/api/health
Invoke-RestMethod http://localhost:7000/api/schools
Invoke-RestMethod http://localhost:7000/api/careers
Invoke-RestMethod "http://localhost:7000/api/careers?schoolId=1"
Invoke-RestMethod "http://localhost:7000/api/careers?name=software"
Invoke-RestMethod http://localhost:7000/api/careers/1
```

### Ejemplos con curl

```bash
curl http://localhost:7000/api/health
curl http://localhost:7000/api/schools
curl "http://localhost:7000/api/careers?schoolId=1"
curl "http://localhost:7000/api/careers?name=software"
curl http://localhost:7000/api/careers/1
```

### Ejemplo de una carrera

```json
{
  "id": 1,
  "code": "ING-SIS",
  "name": "Ingeniería de Software",
  "school": {
    "id": 1,
    "name": "Ingeniería"
  },
  "durationTerms": 12,
  "durationUnit": "Cuatrimestres",
  "modality": "Presencial",
  "status": "Activa"
}
```

Los nombres técnicos del JSON permanecen en inglés, mientras que los valores y mensajes destinados al usuario se presentan en español.

## Swagger y OpenAPI

Con la aplicación en ejecución:

- Swagger UI: `http://localhost:7000/docs`
- Especificación OpenAPI: `http://localhost:7000/openapi`

Swagger permite revisar los parámetros, respuestas y ejecutar solicitudes desde el navegador.

## Códigos de respuesta

| Código | Significado |
| --- | --- |
| `200` | Consulta completada correctamente |
| `400` | ID o parámetro inválido |
| `404` | Carrera o recurso no encontrado |
| `503` | PostgreSQL no está disponible o la consulta falló |
| `500` | Error inesperado |

Ejemplo de error:

```json
{
  "status": 404,
  "message": "La carrera solicitada no existe"
}
```

## Comandos útiles

```powershell
# Compilar las clases
.\mvnw.cmd compile

# Ejecutar pruebas
.\mvnw.cmd test

# Limpiar target
.\mvnw.cmd clean

# Crear el JAR ejecutable
.\mvnw.cmd clean package

# Mostrar las dependencias utilizadas
.\mvnw.cmd dependency:tree

# Descargar dependencias para trabajar sin conexión
.\mvnw.cmd dependency:go-offline

# Ejecutar en desarrollo
.\mvnw.cmd compile exec:java

# Ejecutar el JAR
java -jar target/univia-api.jar
```

## Problemas comunes

### `java` no se reconoce como comando

Instala JDK 21 y configura `JAVA_HOME` y `PATH`. Después abre una terminal nueva y ejecuta `java -version`.

### `psql` no se reconoce como comando

Agrega la carpeta `bin` de PostgreSQL al `PATH` o utiliza pgAdmin para crear y configurar la base de datos.

### Health responde `503`

Verifica que:

- PostgreSQL esté iniciado.
- La base de datos `univia` exista.
- Las credenciales de `.env` sean correctas.
- `DB_HOST` y `DB_PORT` sean accesibles.
- El esquema SQL se haya ejecutado.

La aplicación puede iniciar aunque PostgreSQL esté apagado para que `/api/health` pueda informar el problema.

### El puerto 7000 está ocupado

Cambia `APP_PORT` en `.env`, por ejemplo:

```env
APP_PORT=7001
```

### La aplicación no encuentra `.env`

Ejecuta los comandos desde la carpeta `backend` o configura `backend` como directorio de trabajo en el IDE.

### Las consultas responden con listas vacías

Ejecuta nuevamente `src/main/resources/db/schema.sql` y verifica que la aplicación esté conectada a la base indicada por `DB_NAME`. Una búsqueda también devuelve `[]` cuando ningún programa coincide con los filtros enviados.
