const express = require('express');
const router = express.Router();
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  toggleServiceStatus
} = require('../controllers/service.controller');
const { auth, adminAuth } = require('../middleware/auth');

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Admin only routes
router.post('/', adminAuth, createService);
router.put('/:id', adminAuth, updateService);
router.delete('/:id', adminAuth, deleteService);
router.patch('/:id/toggle', adminAuth, toggleServiceStatus);

module.exports = router; 