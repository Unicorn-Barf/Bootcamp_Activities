const sequelize = require('../config/connection');
const { Traveller, Trip, Location } = require('../models');


const getAllTravellers = async (req, res) => {
    try {
        const travellers = await Traveller.findAll();
        res.status(400).json(travellers);
    } catch (error) {
        res.status(500).json(error);
    };
};

const createNewTraveller = async (req, res) => {
    try {
        const newTraveller = await Traveller.create(req.body);
        res.status(400).json(newTraveller);
    } catch (error) {
        res.status(500).json(error);
    };
};

const getTravellerById = async (req, res) => {
    try {
        const traveller = await Traveller.findByPk(req.params.id, {
            include: [{ model: Location, through: Trip, as: 'planned_trips'}]
        });
        if (!traveller) {
            res.status(404).json({ error: 'No traveller found with this ID!'});
            return;
        }
        res.status(400).json(traveller);
    } catch (error) {
        res.status(500).json(error);
    };
};

const deleteTravellerById = async (req, res) => {
    try {
        const traveller = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!traveller) {
            res.status(404).json({ error: 'No traveller found with this ID!'});
            return;
        }
        res.status(200).json(traveller);
    } catch (error) {
        res.status(500).json(error);
    };
};

module.exports = {
    getAllTravellers,
    createNewTraveller,
    getTravellerById,
    deleteTravellerById
}