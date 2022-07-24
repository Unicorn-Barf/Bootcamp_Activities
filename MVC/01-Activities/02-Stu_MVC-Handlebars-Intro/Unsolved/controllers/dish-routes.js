// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This would be the controller and it handles requests from user
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// Get Route for the base URL Homepage
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// This looks at what engine we are using, look at config for templating
// Look for a template with a name of "all."  whatever templating file extension we
// specified in our templating config
  res.render('all');
});

module.exports = router;
