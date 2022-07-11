const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiRoutes');

router.use('/api', apiRouter);

module.exports = router;
