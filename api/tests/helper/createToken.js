'use strict';

const jwt = require('jsonwebtoken');

function createToken(user) {
  // Sign the JWT
  return jwt.sign({ id: '111', username: 'test_user' }, 'secret', { algorithm: 'HS256', expiresIn: "1h" } );
}

module.exports = createToken;
