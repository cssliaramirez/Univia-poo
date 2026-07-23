# UniVía Frontend

Interfaz estática construida con HTML, CSS y JavaScript nativo.

## Ejecutar

Inicia primero el backend en otra terminal:

```powershell
cd backend
.\mvnw.cmd compile exec:java
```

Después sirve el frontend desde la raíz del proyecto:

```powershell
python -m http.server 5173 -d frontend
```

Abre `http://localhost:5173`.
