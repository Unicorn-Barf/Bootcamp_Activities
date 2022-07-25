const router = require('express').Router();
const { createTrip, deleteTrip } = require('../../controllers/tripsController');


router.post('/', createTrip);

router.delete('/:id', deleteTrip);


module.exports = router;