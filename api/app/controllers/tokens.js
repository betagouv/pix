'use strict';

const User = require('../models/data/user');
const bcrypt = require('bcryptjs');
const Boom = require('boom');
const _ = require('lodash');

const createToken = require('../services/token-service');


function hashPassword(password, callback) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return callback(err, hash);
    });
  });
} 

function validatePassword(password) {
  return _.isString(password) && password.length > 1;
}

function validateEmail(email) {
  return _.isString(email) && email.indexOf("@") > 0;
}

function validateFirstName(firstName) {
  return _.isString(firstName) && firstName.length > 1;
}

function validateLastName(lastName) {
  return _.isString(lastName) && lastName.length > 1;
}

function validateHasAcceptedCGU(hasAcceptedCGU) {
  return _.isBoolean(hasAcceptedCGU) && hasAcceptedCGU;
}

function validatePasswordConfirm(password, passwordConfirm) {
  return _.isString(password) 
  && _.isString(passwordConfirm) 
  && password.length > 0
  && passwordConfirm.length > 0
  && passwordConfirm === password
}


function validateCredentials(credentials) {
  let errors = [];
  if (!validateFirstName(credentials.firstName)) {
    errors.push('Le prénom est obligatoire');
  }
  if (!validateLastName(credentials.lastName)) {
    errors.push('Le nom de famille est obligatoire');
  }
  if (!validatePassword(credentials.password)) {
    errors.push('Le mot de passe doit faire au moins 6 caractères');
  }
  if (!validatePasswordConfirm(credentials.password, credentials.passwordConfirm)) {
    errors.push('La confirmation du mot de passe doit correspondre exactement au mot de passe');
  }
  if (!validateHasAcceptedCGU(credentials.hasAcceptedCGU)) {
    errors.push('Vous devez accepter les CGU');
  }
  return errors;
};

module.exports = {

  create: {
    auth: false,
    handler: (request, reply) => {
      const user = new User();
      
      const credentials = {
        email: request.payload.auth.email,
        firstName: request.payload.auth.firstName,
        lastName: request.payload.auth.lastName,
        password: request.payload.auth.password,
        passwordConfirm: request.payload.auth.passwordConfirm,
        hasAcceptedCGU: request.payload.auth.hasAcceptedCGU
      };

      let credentialsErrors = validateCredentials(credentials);

      if (credentialsErrors.length > 0) {
        reply(credentialsErrors).code(400);
      } else {

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
            reply(['Un utilisateur avec cet email existe déjà']).code(422);
          });

        });
      }



    }
  },

  get: {
    handler: (request, reply) => {
      // TODO
      reply({
        data: {
          type: 'users',
          id: 'user_id',
          attributes: {
            firstName: 'Bob',
          }
        }
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
