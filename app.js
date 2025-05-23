const express = require("express");
// Middlewares
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const port = 3000;

// Pug - Sabri
app.set('view engine', 'pug');
app.set('views', './modules'); // Asegurate de que las vistas .pug estén dentro de "modules"

app.use(express.json());

// Usar el middleware propio para cada solicitud
app.use(requestLogger);

const tareasRoutes = require("./modules/tareas/tareas.routes");
const empleadosRoutes = require("./modules/empleados/empleados.routes");
const filtrosRoutes = require("./modules/filtros/filtros.routes");

const loginRoutes = require('./modules/login/login.routes');
app.use('/login', loginRoutes);

app.use("/tareas", tareasRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/filtros", filtrosRoutes);

app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

app.get('/error', (req, res) => {
  throw new Error('¡Este es un error de prueba!');
});

/* app.use((req, res, next) => {
  const err = new Error('Ruta no encontrada');
  err.status = 404;
  next(err);
}); */

// Middleware de errores (siempre al final)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
