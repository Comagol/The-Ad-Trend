const Cart = require('../models/Cart');
const Service = require('../models/Service');

// Obtener el carrito activo del usuario
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ 
      user: req.user._id,
      status: 'active'
    }).populate('items.service');
    
    if (!cart) {
      return res.status(200).json({ items: [], total: 0 });
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carrito', error: error.message });
  }
};

// Agregar un servicio al carrito
exports.addToCart = async (req, res) => {
  try {
    const { serviceId, quantity } = req.body;
    
    // Verificar si el servicio existe
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    // Buscar carrito activo o crear uno nuevo
    let cart = await Cart.findOne({ 
      user: req.user._id,
      status: 'active'
    });

    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        items: []
      });
    }

    // Verificar si el servicio ya está en el carrito
    const existingItem = cart.items.find(item => 
      item.service.toString() === serviceId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        service: serviceId,
        quantity,
        price: service.price
      });
    }

    await cart.save();
    await cart.populate('items.service');
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar al carrito', error: error.message });
  }
};

// Actualizar cantidad de un servicio en el carrito
exports.updateCartItem = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ 
      user: req.user._id,
      status: 'active'
    });

    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    const cartItem = cart.items.find(item => 
      item.service.toString() === serviceId
    );

    if (!cartItem) {
      return res.status(404).json({ message: 'Servicio no encontrado en el carrito' });
    }

    if (quantity <= 0) {
      cart.items = cart.items.filter(item => 
        item.service.toString() !== serviceId
      );
    } else {
      cartItem.quantity = quantity;
    }

    await cart.save();
    await cart.populate('items.service');
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el carrito', error: error.message });
  }
};

// Eliminar un servicio del carrito
exports.removeFromCart = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const cart = await Cart.findOne({ 
      user: req.user._id,
      status: 'active'
    });

    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    cart.items = cart.items.filter(item => 
      item.service.toString() !== serviceId
    );

    await cart.save();
    await cart.populate('items.service');
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar del carrito', error: error.message });
  }
};

// Vaciar el carrito
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ 
      user: req.user._id,
      status: 'active'
    });

    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    cart.items = [];
    await cart.save();
    
    res.json({ message: 'Carrito vaciado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al vaciar el carrito', error: error.message });
  }
}; 