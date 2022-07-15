const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');
const movieRoutes = require('./movieRoutes');

router.use('/reviews', reviewRoutes);
router.use('/movies', movieRoutes);

module.exports = router;