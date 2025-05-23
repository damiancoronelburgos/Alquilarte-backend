const express = require('express');
const router = express.Router();
const {
  getAllTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea,
  obtenerTareas
} = require('./tareas.controller');

//ruta fija para mostrar la vista con Pug 
router.get('/vista', async (req, res) => {
  try {
    const tareas = await obtenerTareas();
    console.log("Desde /vista:", tareas); // Verificación en consola
    res.render('tareas/tareas.views.pug', { tareas });
  } catch (error) {
    res.status(500).send('Error al cargar la vista');
  }
});

//  rutas CRUD 
router.get('/', getAllTareas);
router.get('/:id', getTareaById);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

module.exports = router;
