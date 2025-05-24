# Alquilarte - Backend

Proyecto grupal de desarrollo backend con Node.js, Express y vistas Pug.

## Estructura del proyecto

- `modules/`
  - `tareas/`: CRUD de tareas, controlador, modelo y rutas (Sabri)
  - `empleados/`: CRUD de empleados, controlador, modelo y rutas. Incluye asignación de sector y rol (Fede)
  - `filtros/`: Funcionalidad de filtros por estado, prioridad, fecha y área funcional (Ale)
  - `middlewares/`: Middlewares personalizados para validación y control de flujo (Joaquín)
- `data/`: Archivos JSON persistentes (`empleados.json`, `tareas.json`, etc.) (Damian)
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

- `/empleados-vista`: Vista interactiva con tabla, alta, edición y baja de empleados usando `fetch`. Permite asignar sector (Ventas, Administración, Contabilidad, Mantenimiento) y rol.
- `/tareas/vista`: Vista de tareas renderizada desde backend usando datos de archivo JSON. Incluye filtros por estado, prioridad y fecha.

## Sectores funcionales y roles

Cada empleado puede pertenecer a uno de los siguientes sectores:

- **Ventas**: Agente inmobiliario, Coordinador comercial, Asistente de ventas
- **Administración**: Recepcionista, Secretaria administrativa, Responsable de RRHH
- **Contabilidad**: Contador, Auxiliar contable, Encargado de cobranzas
- **Mantenimiento**: Coordinador, Técnico, Auxiliar/logística

Esto permite organizar y asignar tareas con mayor precisión.

## Notas importantes

- Las vistas fueron centralizadas en la carpeta `/views/`
- Se usa `express.static('public')` para servir archivos como CSS
- Las rutas API (`/empleados`, `/tareas`, etc.) permanecen separadas de las vistas