'use strict';

const User = require('../models/data/user');
const bcrypt = require('bcryptjs');
const Boom = require('boom');

const createToken = require('../services/token-service');


function hashPassword(password, callback) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return callback(err, hash);
    });
  });
} 

module.exports = {

  create: {
    handler: (request, reply) => {
      const user = new User();

      console.log(JSON.stringify(request.payload));

      // XXX : random login, should be delete from database
      user.attributes.login = Math.random().toString(36).substr(2, 5);
      user.attributes.email = request.payload.auth.email;
      user.attributes.firstName = request.payload.auth.firstName;
      user.attributes.lastName = request.payload.auth.lastName;

      hashPassword(request.payload.auth.password, (err, hash) => {
        if (err) {
          reply({ message:'invalid query' }).code(400);
        }

        user.attributes.password = hash;

        user.save()
          .then((createdUser) => {
            reply({ jwt: createToken(user) }).code(201);
          })
          .catch((error) => {
            console.log(error);
            reply({ message:'unable to create user' }).code(400);
          });

      });
    }
  },

  authenticate: {
    handler: (request, reply) => {
      // TODO
      reply({});
    }
  }
};
