const Service = require('../models/service.model');

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find({ isActive: true });
        res.status(200).json({
            success: true,
            data: services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching services',
            error: error.message
        });
    }
};

// Get single service
exports.getService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }
        res.status(200).json({
            success: true,
            data: service
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching service',
            error: error.message
        });
    }
};

// Create new service
exports.createService = async (req, res) => {
    try {
        const service = await Service.create(req.body);
        res.status(201).json({
            success: true,
            data: service
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating service',
            error: error.message
        });
    }
};

// Update service
exports.updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }
        res.status(200).json({
            success: true,
            data: service
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating service',
            error: error.message
        });
    }
};

// Delete service (soft delete)
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Service deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error deleting service',
            error: error.message
        });
    }
}; 