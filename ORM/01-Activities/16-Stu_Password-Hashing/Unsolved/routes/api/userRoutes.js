const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
// When someone makes a post request to /api/login call this function
router.post('/login', async (req, res) => {
  try {
    // Finding one user with specific email with an email address being provided by a client
    // via a form or postman
    const userData = await User.findOne({ where: { email: req.body.email } });
    // Checks if user exists with that email if not error response
    if (!userData) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // Uses bcrypt to compare stored hash password with request body password
    // Must return a boolean true for match
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // If they don't match, respond with error message
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // If the do match respond with logged in message
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
