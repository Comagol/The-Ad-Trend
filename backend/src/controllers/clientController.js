const Client = require('../models/Client');

// Obtener todos los clientes
exports.getAllClients = async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = {};

    // Filtrar por estado si se proporciona
    if (status) {
      query.status = status;
    }

    // Búsqueda por nombre o email
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const clients = await Client.find(query)
      .sort({ createdAt: -1 })
      .populate('user', 'email');

    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes', error: error.message });
  }
};

// Obtener un cliente específico
exports.getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id)
      .populate('user', 'email');

    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el cliente', error: error.message });
  }
};

// Crear un nuevo cliente
exports.createClient = async (req, res) => {
  try {
    const clientData = {
      ...req.body,
      user: req.user._id // Asociar el cliente con el usuario actual
    };

    const existingClient = await Client.findOne({ email: clientData.email });
    if (existingClient) {
      return res.status(400).json({ message: 'Ya existe un cliente con este email' });
    }

    const client = new Client(clientData);
    await client.save();

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el cliente', error: error.message });
  }
};

// Actualizar un cliente
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // No permitir actualizar el usuario asociado
    delete updateData.user;

    const client = await Client.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el cliente', error: error.message });
  }
};

// Eliminar un cliente
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cliente', error: error.message });
  }
};

// Obtener estadísticas de clientes
exports.getClientStats = async (req, res) => {
  try {
    const totalClients = await Client.countDocuments();
    const activeClients = await Client.countDocuments({ status: 'active' });
    const inactiveClients = await Client.countDocuments({ status: 'inactive' });

    const stats = {
      total: totalClients,
      active: activeClients,
      inactive: inactiveClients
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener estadísticas', error: error.message });
  }
}; 