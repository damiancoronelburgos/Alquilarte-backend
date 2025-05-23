const { leerTareas, guardarTareas } = require('./tareas.model');

// Mostrar todas las tareas (formato API)
async function getAllTareas(req, res) {
  try {
    const tareas = await leerTareas();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las tareas' });
  }
}

// Mostrar una sola tarea por ID
async function getTareaById(req, res) {
  const tareas = await leerTareas();
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }
}

// Crear una nueva tarea
async function createTarea(req, res) {
  const tareas = await leerTareas();
  const nuevaTarea = {
    id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
    ...req.body,
  };
  tareas.push(nuevaTarea);
  await guardarTareas(tareas);
  res.status(201).json(nuevaTarea);
}

// Actualizar una tarea existente
async function updateTarea(req, res) {
  const tareas = await leerTareas();
  const index = tareas.findIndex(t => t.id === parseInt(req.params.id));
  if (index !== -1) {
    tareas[index] = { ...tareas[index], ...req.body };
    await guardarTareas(tareas);
    res.json(tareas[index]);
  } else {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }
}

// Eliminar una tarea
async function deleteTarea(req, res) {
  const tareas = await leerTareas();
  const nuevasTareas = tareas.filter(t => t.id !== parseInt(req.params.id));
  if (nuevasTareas.length === tareas.length) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }
  await guardarTareas(nuevasTareas);
  res.json({ mensaje: 'Tarea eliminada correctamente' });
}

// Función auxiliar para la vista Pug (no responde con JSON)
async function obtenerTareas() {
  const tareas = await leerTareas();
  return tareas;
}

module.exports = {
  getAllTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea,
  obtenerTareas // Usada en la vista Pug
};
