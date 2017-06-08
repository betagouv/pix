const Boom = require('boom');
const _ = require('../../infrastructure/utils/lodash-utils');
const authorizationToken = require('../../../lib/infrastructure/validators/jsonwebtoken-verify');

const userSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');
const mailService = require('../../domain/services/mail-service');
const config = require('../../../lib/settings');

function _isUniqConstraintViolated(err) {
  const SQLITE_UNIQ_CONSTRAINT = 'SQLITE_CONSTRAINT';
  const PGSQL_UNIQ_CONSTRAINT = '23505';

  return (err.code === SQLITE_UNIQ_CONSTRAINT || err.code === PGSQL_UNIQ_CONSTRAINT);
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
    const token = request.headers.authorization;
    return authorizationToken
      .verify(token)
      .then((decoded) => {
        return reply(decoded).code(201);
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

