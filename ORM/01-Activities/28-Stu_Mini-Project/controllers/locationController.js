const sequelize = require('../config/connection');
const { Traveller, Trip, Location } = require('../models');

const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();
        res.status(400).json(locations);
    } catch (error) {
        res.status(500).json(error);
    };
};

const getLocationById = async (req, res) => {
    try {
        const location = await Location.findByPk(req.params.id);
        if (!location) {
            res.status(404).json({ error: 'No location found with this ID!'});
            return;
        }
        res.status(400).json(location);
    } catch (error) {
        res.status(500).json(error);
    };
};

const createLocation = async (req, res) => {
    try {
        const newLocation = await Location.create(req.body);
        res.status(400).json(newLocation);
    } catch (error) {
        res.status(500).json(error);
    };
};

const deleteLocation = async (req, res) => {
    try {
        const location = await Location.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!location) {
            res.status(404).json({ error: 'No location found with this ID!'});
            return;
        }
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json(error);
    };
};


module.exports = {
    getAllLocations,
    getLocationById,
    createLocation,
    deleteLocation,
}