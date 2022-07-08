const router = require('express').Router();
const tipsRoutes = require('./tipsRoutes');
const feedbackRoutes = require('./feedbackRoutes');


router.use('/tips', tipsRoutes);
router.use('/feedback', feedbackRoutes);

module.exports = router;