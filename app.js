const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tareasRoutes = require("./modules/tareas/tareas.routes");
const empleadosRoutes = require("./modules/empleados/empleados.routes");
const filtrosRoutes = require("./modules/filtros/filtros.routes");

app.use("/tareas", tareasRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/filtros", filtrosRoutes);

app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
