const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');

// Get all services
router.get('/', serviceController.getAllServices);

// Get single service
router.get('/:id', serviceController.getService);

// Create new service
router.post('/', serviceController.createService);

// Update service
router.put('/:id', serviceController.updateService);

// Delete service
router.delete('/:id', serviceController.deleteService);

module.exports = router; 