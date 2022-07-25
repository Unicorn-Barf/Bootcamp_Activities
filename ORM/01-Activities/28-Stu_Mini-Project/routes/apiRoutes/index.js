const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes.js');
const locationRoutes = require('./locationRoutes.js');
const tripRoutes = require('./tripRoutes.js');

router.use('/travellers', travellerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes);

module.exports = router;