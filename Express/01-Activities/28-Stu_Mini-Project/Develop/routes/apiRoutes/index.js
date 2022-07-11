// Import our modular routers for /tips and /feedback
const router = require('express').Router();
const diagnosticsRouter = require('./diagnosticsRoutes');
const feedbackRouter = require('./feedbackRoutes');
const tipsRouter = require('./tipsRoutes');

router.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route
router.use('/diagnostics', diagnosticsRouter);
router.use('/tips', tipsRouter);

module.exports = router;