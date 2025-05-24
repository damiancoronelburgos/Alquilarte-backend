const { leerEmpleados } = require('../empleados/empleados.model');

async function login(req, res, next) {
  const { usuario, password } = req.body;

  if (typeof usuario !== 'string' || typeof password !== 'string') {
    const err = new Error('Debe enviar usuario y contraseña válidos');
    err.status = 400;
    return next(err);
  }

  try {
    const empleados = await leerEmpleados();
    const empleado = empleados.find(e => e.usuario === usuario && e.password === password);

    if (empleado) {
      // Redirigir al menú o guardar sesión (opcional)
      return res.redirect('/menu');
    } else {
      return res.status(401).render('login', { error: 'Usuario o contraseña incorrectos' });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { login };