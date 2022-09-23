const jwt = require('jsonwebtoken');

// secret is used for encoding the token
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    // Takes 3 params
    // 1st on is what do we want the token to look like in data format
    // 2nd params is what do we want to encode the token with
    // 3rd one is configuraton object
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
