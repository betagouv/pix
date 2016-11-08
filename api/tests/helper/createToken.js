'use strict';

const jwt = require('jsonwebtoken');

function createToken(userId) {
  return jwt.sign({ id: userId, username: 'jsnow@winterfell.got' }, 'secret', { algorithm: 'HS256', expiresIn: "1h" } );
}

module.exports = createToken;
