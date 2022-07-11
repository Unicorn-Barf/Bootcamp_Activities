const router = require('express').Router();
const controller =require('../../../controllers/tipsController');


// GET Route for retrieving all the tips
router.route('/')
  .get(controller.getAllTips)
  .post(controller.postTip);


module.exports = router;
