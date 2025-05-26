const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { auth } = require('../middleware/auth');

// Todas las rutas requieren autenticación
router.use(auth);

// Obtener todos los clientes
router.get('/', clientController.getAllClients);

// Obtener estadísticas de clientes
router.get('/stats', clientController.getClientStats);

// Obtener un cliente específico
router.get('/:id', clientController.getClient);

// Crear un nuevo cliente
router.post('/', clientController.createClient);

// Actualizar un cliente
router.put('/:id', clientController.updateClient);

// Eliminar un cliente
router.delete('/:id', clientController.deleteClient);

module.exports = router; 