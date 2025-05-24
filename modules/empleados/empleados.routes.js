const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const router = express.Router();

const {
  obtenerEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
} = require('./empleados.controller');

// Rutas de empleados
router.get('/', obtenerEmpleados);
router.post('/', crearEmpleado);
router.put('/:id', actualizarEmpleado);
router.delete('/:id', eliminarEmpleado);

// Ruta para obtener sectores y roles desde JSON
const sectoresRolesPath = path.join(__dirname, '../../data/sectores_roles.json');

router.get('/sectores-roles', async (req, res, next) => {
  try {
    const data = await fs.readFile(sectoresRolesPath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (err) {
    next(err);
  }
});

module.exports = router;