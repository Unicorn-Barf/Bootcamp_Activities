const sequelize = require('../config/connection');
const { Traveller, Trip, Location } = require('../models');

const createTrip = async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
      } catch (err) {
        res.status(400).json(err);
      };
};

const deleteTrip = async (req, res) => {
    try {
        const tripData = await Trip.destroy({
          where: { id: req.params.id }
        });
        if (!tripData) {
          res.status(404).json({ message: 'No trip with this id!' });
          return;
        }
        res.status(200).json(tripData);
      } catch (err) {
        res.status(500).json(err);
      }
};

module.exports = {
    createTrip,
    deleteTrip
}