const { getAllLocations, createLocation, getLocationById, deleteLocation } = require('../../controllers/locationController');

const router = require('express').Router();

router.route('/')
    .get(getAllLocations)
    .post(createLocation);

router.route('/:id')
    .get(getLocationById)
    .delete(deleteLocation);

module.exports = router;