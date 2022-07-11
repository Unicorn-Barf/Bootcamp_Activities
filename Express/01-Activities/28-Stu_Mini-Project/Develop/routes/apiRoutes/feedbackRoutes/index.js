const router = require('express').Router();
const controller = require('../../../controllers/feedbackController');

// GET Route for retrieving all the feedback
router.route('/')
  .get(controller.getAllFeedback)
  .post(controller.postFeedback);

module.exports = router;
