const express = require('express');
const router = express.Router();
const {
  getAllTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea,
} = require('./tareas.controller');

// Rutas reales para el CRUD
router.get('/', getAllTareas);
router.get('/:id', getTareaById);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

module.exports = router;
