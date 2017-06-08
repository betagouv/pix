const Boom = require('boom');
const _ = require('../../infrastructure/utils/lodash-utils');
const jsonwebtoken = require('jsonwebtoken');

const userSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');
const mailService = require('../../domain/services/mail-service');
const config = require('../../../lib/settings');

function _isUniqConstraintViolated(err) {
  const SQLITE_UNIQ_CONSTRAINT = 'SQLITE_CONSTRAINT';
  const PGSQL_UNIQ_CONSTRAINT = '23505';

  return (err.code === SQLITE_UNIQ_CONSTRAINT || err.code === PGSQL_UNIQ_CONSTRAINT);
}

function verifyToken(authorizationToken) {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(authorizationToken, config.authentification.secret, (err, decoded) => {
      if(err) {
        return reject(err);
      }

      resolve(decoded);
    });
  });
}
module.exports = {

  save(request, reply) {

    if(!_.has(request, 'payload') || !_.has(request, 'payload.data.attributes')) {
      return reply(Boom.badRequest());
    }

    const user = userSerializer.deserialize(request.payload);

    return user
      .save()
      .then((user) => {
        mailService.sendAccountCreationEmail(user.get('email'));

        reply(userSerializer.serialize(user)).code(201);
      })
      .catch((err) => {
        if(_isUniqConstraintViolated(err)) {
          err = _buildErrorWhenUniquEmail();
        }

        reply(validationErrorSerializer.serialize(err)).code(422);
      });
  },

  getProfile(request, reply) {
    const authorization = request.headers.authorization;
    if(!authorization) {
      return reply(validationErrorSerializer.serialize(_handleWhenInvalidAuthorization())).code(401);
    }

    return verifyToken(authorization)
      .then((decoded) => {
        reply().code(201);
      })
      .catch((err) => {
        return reply(validationErrorSerializer.serialize(_handleWhenInvalidAuthorization())).code(401);
      });
  }

};

function _buildErrorWhenUniquEmail() {
  return {
    data: {
      email: ['Cette adresse electronique est déjà enregistrée.']
    }
  };
}

function _handleWhenInvalidAuthorization() {
  return {
    data: {
      email: ['Le token n\'est pas valid']
    }
  };
}

