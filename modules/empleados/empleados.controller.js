const { leerEmpleados, guardarEmpleados } = require('./empleados.model');

async function obtenerEmpleados(req, res, next) {
  try {
    const empleados = await leerEmpleados();
    res.json(empleados);
  } catch (err) {
    next(err);
  }
}

async function crearEmpleado(req, res, next) {
  try {
    const empleados = await leerEmpleados();
    const nuevoEmpleado = {
      id: empleados.length > 0 ? Math.max(...empleados.map(e => e.id)) + 1 : 1,
      nombre: req.body.nombre,
      sector: req.body.sector,
      rol: req.body.rol,
    };
    empleados.push(nuevoEmpleado);
    await guardarEmpleados(empleados);
    res.status(201).json(nuevoEmpleado);
  } catch (err) {
    next(err);
  }
}

async function actualizarEmpleado(req, res, next) {
  try {
    const { id } = req.params;
    const empleados = await leerEmpleados();
    const index = empleados.findIndex(e => e.id === Number(id));
    if (index === -1) {
      // Puedes crear un error para que pase por errorHandler
      const err = new Error('Empleado no encontrado');
      err.status = 404;
      throw err;
    }
    empleados[index] = { ...empleados[index], ...req.body };
    await guardarEmpleados(empleados);
    res.json(empleados[index]);
  } catch (err) {
    next(err);
  }
}

async function eliminarEmpleado(req, res, next) {
  try {
    const { id } = req.params;
    let empleados = await leerEmpleados();
    const existe = empleados.find(e => e.id === Number(id));
    if (!existe) {
      const err = new Error('Empleado no encontrado');
      err.status = 404;
      throw err;
    }
    empleados = empleados.filter(e => e.id !== Number(id));
    await guardarEmpleados(empleados);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}


module.exports = {
  obtenerEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
};


