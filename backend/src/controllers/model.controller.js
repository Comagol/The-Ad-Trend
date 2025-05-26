const Model = require('../models/Model');

// Submit model application (public)
const submitModelApplication = async (req, res) => {
  try {
    const model = new Model({
      ...req.body,
      photos: req.files ? req.files.map(file => ({
        url: `/uploads/${file.filename}`,
        isMain: false
      })) : []
    });

    // Set first photo as main if exists
    if (model.photos.length > 0) {
      model.photos[0].isMain = true;
    }

    await model.save();
    res.status(201).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all models (public)
const getAllModels = async (req, res) => {
  try {
    const models = await Model.find({ status: 'approved' });
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get model by ID (public)
const getModelById = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ error: 'Model not found' });
    }
    res.json(model);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get pending applications (admin only)
const getPendingApplications = async (req, res) => {
  try {
    const applications = await Model.find({ status: 'pending' });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update model status (admin only)
const updateModelStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const model = await Model.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!model) {
      return res.status(404).json({ error: 'Model not found' });
    }

    res.json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update model photos (admin only)
const updateModelPhotos = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ error: 'Model not found' });
    }

    if (req.files) {
      const newPhotos = req.files.map(file => ({
        url: `/uploads/${file.filename}`,
        isMain: false
      }));

      model.photos = [...model.photos, ...newPhotos];
      await model.save();
    }

    res.json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Set main photo (admin only)
const setMainPhoto = async (req, res) => {
  try {
    const { photoId } = req.body;
    const model = await Model.findById(req.params.id);
    
    if (!model) {
      return res.status(404).json({ error: 'Model not found' });
    }

    // Reset all photos to not main
    model.photos.forEach(photo => {
      photo.isMain = false;
    });

    // Set selected photo as main
    const photo = model.photos.id(photoId);
    if (!photo) {
      return res.status(404).json({ error: 'Photo not found' });
    }
    photo.isMain = true;

    await model.save();
    res.json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  submitModelApplication,
  getAllModels,
  getModelById,
  getPendingApplications,
  updateModelStatus,
  updateModelPhotos,
  setMainPhoto
}; 