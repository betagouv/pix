'use strict';

const jwt = require('jsonwebtoken');

function createToken(user) {
  // Sign the JWT
  return jwt.sign({ id: 'any', email: 'jsnow@winterfell.got' }, 'secret', { algorithm: 'HS256', expiresIn: "1h" } );
}

module.exports = createToken;
