# Alquilarte - Backend

Proyecto grupal de desarrollo backend con Node.js, Express y vistas Pug.

## Estructura del proyecto

- `modules/`
  - `tareas/`: CRUD de tareas, controlador, modelo y rutas (Sabri)
  - `empleados/`: CRUD de empleados, controlador, modelo y rutas (Fede)
  - `filtros/`: Funcionalidad de filtros y vista asociada (Ale)
  - `middlewares/`: Middlewares personalizados (Joaquín)
- `data/`: Archivos JSON persistentes (Damian)
- `views/`: Vistas Pug centralizadas
- `public/`: Archivos estáticos como CSS
- `app.js`: Configuración principal del servidor

## Comandos

```bash
npm install
npm start
```

El servidor correrá por defecto en `http://localhost:3000/`

## Vistas disponibles

- `/empleados-vista`: Vista interactiva con tabla, alta, edición y baja de empleados usando `fetch`
- `/tareas/vista`: Vista de tareas renderizada desde backend usando datos de archivo JSON

## Notas importantes

- Las vistas fueron centralizadas en la carpeta `/views/`
- Para servir archivos como CSS, se usa `express.static('public')`
- Las rutas API permanecen separadas (`/empleados`, `/tareas`, etc.) y no interfieren con las vistas
