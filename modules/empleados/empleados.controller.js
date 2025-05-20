const { leerEmpleados, guardarEmpleados } = require('./empleados.model');
const { v4: uuidv4 } = require('uuid');

async function obtenerEmpleados(req, res) {
  const empleados = await leerEmpleados();
  res.json(empleados);
}

async function crearEmpleado(req, res) {
  const nuevoEmpleado = {
    id: empleados.length > 0 ? Math.max(...empleados.map(e => e.id)) + 1 : 1,
    nombre: req.body.nombre,
    sector: req.body.sector,
    rol: req.body.rol,
  };

  const empleados = await leerEmpleados();
  empleados.push(nuevoEmpleado);
  await guardarEmpleados(empleados);

  res.status(201).json(nuevoEmpleado);
}

async function actualizarEmpleado(req, res) {
  const { id } = req.params;
  const empleados = await leerEmpleados();
  const index = empleados.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Empleado no encontrado' });
  }

  empleados[index] = { ...empleados[index], ...req.body };
  await guardarEmpleados(empleados);
  res.json(empleados[index]);
}

async function eliminarEmpleado(req, res) {
  const { id } = req.params;
  let empleados = await leerEmpleados();
  const existe = empleados.find(e => e.id === id);

  if (!existe) {
    return res.status(404).json({ error: 'Empleado no encontrado' });
  }

  empleados = empleados.filter(e => e.id !== id);
  await guardarEmpleados(empleados);
  res.status(204).send();
}

module.exports = {
  obtenerEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
};