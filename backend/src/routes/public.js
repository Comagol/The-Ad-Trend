const express = require('express');
const router = express.Router();

// Get about us information
router.get('/about', (req, res) => {
  // Aquí puedes agregar la lógica para obtener la información de "Nosotros"
  res.json({
    title: 'Sobre Nosotros',
    content: 'Información sobre la agencia...',
    // Agrega más campos según necesites
  });
});

// Get contact information
router.get('/contact', (req, res) => {
  // Aquí puedes agregar la lógica para obtener la información de contacto
  res.json({
    address: 'Dirección de la agencia',
    phone: 'Teléfono de contacto',
    email: 'email@agencia.com',
    // Agrega más campos según necesites
  });
});

// Submit contact form
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Aquí puedes agregar la lógica para procesar el formulario de contacto
  // Por ejemplo, enviar un email, guardar en base de datos, etc.
  res.json({
    message: 'Mensaje recibido. Nos pondremos en contacto contigo pronto.'
  });
});

module.exports = router; 