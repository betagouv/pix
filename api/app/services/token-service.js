'use strict';

const jwt = require('jsonwebtoken');

function createToken(user) {
  // Sign the JWT
  return jwt.sign({ id: user.id, username: user.email }, 'secret', { algorithm: 'HS256', expiresIn: "1h" } );
}

module.exports = createToken;
