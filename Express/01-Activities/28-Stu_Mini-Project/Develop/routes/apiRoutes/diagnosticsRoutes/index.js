const router = require('express').Router();
const controller = require('../../../controllers/diagnosticsController');

// GET Route for retrieving diagnostic information
router.route('/')
  .get(controller.getAllDiagnostics)
  .post(controller.createDiagnostic);

module.exports = router;
