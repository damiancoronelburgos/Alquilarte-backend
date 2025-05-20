const fs = require('fs/promises');
const path = require('path');

const empleadosPath = path.join(__dirname, '../../data/empleados.json');

async function leerEmpleados() {
  const data = await fs.readFile(empleadosPath, 'utf-8');
  return JSON.parse(data);
}

async function guardarEmpleados(empleados) {
  await fs.writeFile(empleadosPath, JSON.stringify(empleados, null, 2));
}

module.exports = {
  leerEmpleados,
  guardarEmpleados,
};