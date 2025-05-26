const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { auth } = require('../middleware/auth');

// Todas las rutas requieren autenticación
router.use(auth);

// Obtener el carrito del usuario
router.get('/', cartController.getCart);

// Agregar un servicio al carrito
router.post('/add', cartController.addToCart);

// Actualizar cantidad de un servicio en el carrito
router.put('/update/:serviceId', cartController.updateCartItem);

// Eliminar un servicio del carrito
router.delete('/remove/:serviceId', cartController.removeFromCart);

// Vaciar el carrito
router.delete('/clear', cartController.clearCart);

module.exports = router; 