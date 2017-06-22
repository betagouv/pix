const Boom = require('boom');
const _ = require('../../infrastructure/utils/lodash-utils');
const authorizationToken = require('../../../lib/infrastructure/validators/jsonwebtoken-verify');

const userSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');
const mailService = require('../../domain/services/mail-service');
const UserRepository = require('../../../lib/infrastructure/repositories/user-repository');
const {NotFoundError} = require('../../../lib/domain/errors');
const {InvalidTokenError} = require('../../../lib/domain/errors');

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
      .then(UserRepository.findUserById)
      .then((foundedUser) => {
        reply(userSerializer.serialize(foundedUser)).code(201);
      })
      .catch((err) => {
        if(err instanceof NotFoundError) {
          err = 'Cet utilisateur est introuvable';
        } else if(err instanceof InvalidTokenError) {
          err = 'Le token n’est pas valid';
        } else {
          err = 'Une erreur est survenue lors de l’authentification de l’utilisateur';
        }
        
        reply(validationErrorSerializer.serialize(_handleWhenInvalidAuthorization(err))).code(401);
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

function _handleWhenInvalidAuthorization(errorMessage) {
  return {
    data: {
      authorization: [errorMessage]
    }
  };
}

