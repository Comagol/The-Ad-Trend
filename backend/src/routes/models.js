const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  submitModelApplication,
  getAllModels,
  getModelById,
  getPendingApplications,
  updateModelStatus,
  updateModelPhotos,
  setMainPhoto
} = require('../controllers/model.controller');
const { auth, adminAuth } = require('../middleware/auth');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Public routes
router.get('/', getAllModels);
router.get('/:id', getModelById);
router.post('/apply', upload.array('photos', 5), submitModelApplication);

// Admin only routes
router.get('/admin/pending', adminAuth, getPendingApplications);
router.patch('/:id/status', adminAuth, updateModelStatus);
router.post('/:id/photos', adminAuth, upload.array('photos', 5), updateModelPhotos);
router.patch('/:id/main-photo', adminAuth, setMainPhoto);

module.exports = router; 