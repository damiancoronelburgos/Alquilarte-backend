// modules/login/login.controller.js
const empleados = require('../empleados/empleados.json');

function login(req, res, next) {
  const { id, nombre } = req.body;

  // Validación básica de payload
  if (typeof id !== 'number' || typeof nombre !== 'string') {
    const err = new Error('Debe enviar un id (número) y nombre (texto)');
    err.status = 400;
    return next(err);
  }

  // Buscar empleado
  const empleado = empleados.find(e => e.id === id && e.nombre === nombre);

  if (empleado) {
    // Usuario válido
    return res.json({
      mensaje: 'Login exitoso',
      empleado
    });
  } else {
    // Credenciales inválidas
    const err = new Error('ID o nombre incorrectos');
    err.status = 401;
    return next(err);
  }
}

module.exports = { login };
