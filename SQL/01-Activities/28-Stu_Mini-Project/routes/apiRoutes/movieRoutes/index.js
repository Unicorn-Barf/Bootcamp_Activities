const router = require('express').Router();
const controller = require('../../../controllers/movieController');

// create controller functions
router.route('/')
    .get(controller.getAllMovies)
    .post(controller.postMovie);

router.route('/:id')
    .delete(controller.deleteMovieById);

module.exports = router;