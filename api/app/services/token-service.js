'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/data/user');

function createToken(user) {
  // Sign the JWT
  return jwt.sign({ id: user.id, username: user.email }, 'secret', { algorithm: 'HS256', expiresIn: "1h" } );
}

function validateToken(decoded, request, callback) {
  
  // simply check user exist in database
  new User({ id: decoded.id })
    .fetch({require:true})
    .then((user) => {
      return callback(null, true);
    })
    .catch((err) => {
      return callback(null, false);
    });  
    
};



module.exports = {createToken, validateToken};
