const userRepository = require('../../infrastructure/repositories/user-repository');

const organisationRepository = require('../../infrastructure/repositories/organization-repository');
const organizationSerializer = require('../../infrastructure/serializers/jsonapi/organization-serializer');
const organizationService = require('../../domain/services/organization-service');

const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

const _ = require('lodash');
const logger = require('../../infrastructure/logger');
const jsonWebToken = require('../../infrastructure/validators/jsonwebtoken-verify');
const { InvalidTokenError } = require('../../../lib/domain/errors');


const { AlreadyRegisteredEmailError } = require('../../domain/errors');

function _generateUniqueOrganizationCode() {
  const code = organizationService.generateOrganizationCode();

  return organisationRepository.isCodeAvailable(code)
    .then((code) => {
      return code;
    })
    .catch(_generateUniqueOrganizationCode);
}

module.exports = {
  create: (request, reply) => {

    const organization = organizationSerializer.deserialize(request.payload);
    const userRawData = _extractUserInformation(request, organization);

    const userValidationErrors = userRepository.validateData(userRawData);
    const organizationValidationErrors = organization.validationErrors();

    if (userValidationErrors || organizationValidationErrors) {
      const errors = _.merge(userValidationErrors, organizationValidationErrors);
      return reply(validationErrorSerializer.serialize({ data: errors })).code(400);
    }

    return userRepository
      .isEmailAvailable(organization.get('email'))
      .then(() => {
        return userRepository.save(userRawData);
      })
      .then((user) => {
        organization.set('userId', user.id);
        organization.user = user;
      })
      .then(_generateUniqueOrganizationCode)
      .then((code) => {
        organization.set('code', code);
        return organisationRepository.saveFromModel(organization);
      })
      .then((organization) => {
        reply(organizationSerializer.serialize(organization));
      })
      .catch((err) => {
        if (err instanceof AlreadyRegisteredEmailError) {
          return reply(validationErrorSerializer.serialize(_buildAlreadyExistingEmailError(organization.get('email')))).code(400);
        }

        logger.error(err);
        reply().code(500);
      });
  },

  //idées refacto : faire une fontion qui retourne une promesse après verification que l'user demandeur est bien dans l'orga
  //Ajouter l'envoi de message d'erreur
  get: (request, reply) => {
    const organizationId = request.params.id;
    const token = request.headers.authorization;

    return jsonWebToken
      .verify(token)
      .then((connectedUserId) => {
        return organisationRepository
          .get(organizationId)
          .then((organization) => {
            const associatedUser = organization.get('userId');
            if (associatedUser === connectedUserId) {
              return reply(organizationSerializer.serialize(organization)).code(200);
            } else {
              return reply().code(403);
            }
          })
          .catch(_ => {
            return reply().code(404);
          });
      })
      .catch(() => {
        return Promise.resolve(reply().code(401));
      });
  },

  getAuthenticatedUserOrganizations: (request, reply) => {
    const token = request.headers.authorization;
    let connectedUserId;
    let organization;

    return jsonWebToken
      .verify(token)
      .then(connectedUserIdFromVerify => {
        connectedUserId = connectedUserIdFromVerify;
        return organisationRepository.getByUserId(connectedUserId);
      })
      .then((organizationFromRepo) => {
        organization = organizationFromRepo;
        return userRepository.findUserById(connectedUserId);
      })
      .then((user) => {
        organization.user = user;
        return reply(organizationSerializer.serialize(organization)).code(200);
      })
      .catch((err) => {

        if (err instanceof InvalidTokenError) {
          return Promise.resolve(reply().code(401));
        } else {
          return Promise.resolve(reply().code(404));
        }

      });
  }
};

function _buildAlreadyExistingEmailError(email) {
  return {
    data: { email: [`L'adresse ${email} est déjà associée à un utilisateur.`] }
  };
}

function _extractUserInformation(request, organization) {
  return {
    firstName: request.payload.data.attributes['first-name'] || '',
    lastName: request.payload.data.attributes['last-name'] || '',
    email: organization.get('email') || '',
    cgu: true,
    password: request.payload.data.attributes['password'] || ''
  };
}
