'use strict';

const jwt = require('jsonwebtoken');

function createToken(userId) {
  return jwt.sign({ id: userId, username: 'jsnow@winterfell.got' }, 'secret', { algorithm: 'HS256', expiresIn: "1h" } );
}

function createAuthentifiedToken(callback) {
 
    knex.select('id')
    .from('users')
    .where({email:'jsnow@winterfell.got'})
    .limit(1)
    .then(function(rows) {
      const headers = { Authorization: createToken(rows[0].id) };
      callback(headers);
    });

}

module.exports = createAuthentifiedToken;
