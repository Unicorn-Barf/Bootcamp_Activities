const router = require('express').Router();
const {
    getAllTravellers,
    createNewTraveller,
    getTravellerById,
    deleteTravellerById
} = require('../../controllers/travellerController');

router.route('/')
    .get(getAllTravellers)
    .post(createNewTraveller);

router.route('/:id')
    .get(getTravellerById)
    .delete(deleteTravellerById);

module.exports = router;