const Boom = require('boom');
const _ = require('../../infrastructure/utils/lodash-utils');

const userSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');
const mailService = require('../../domain/services/mail-service');
const googleReCaptcha = require('../../../lib/infrastructure/validators/grecaptcha-validator');
const {InvalidRecaptchaTokenError} = require('../../../lib/infrastructure/validators/errors');

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

    return googleReCaptcha.verify(request.payload.data.attributes.recaptchaToken)
      .then(() => {
        return user
          .save()
          .then((user) => {
            mailService.sendAccountCreationEmail(user.get('email'));

            reply(userSerializer.serialize(user)).code(201);
          });
      }).catch((err) => {
        if(err instanceof InvalidRecaptchaTokenError) {
          const userValidationErrors = user.validationErrors();
          const captchaError = {recaptchaToken: ['Le captcha n\'est pas valide.']};
          const mergedErrors = Object.assign(captchaError, userValidationErrors);
          err = _buildErrorWhenRecaptchaTokenInvalid(mergedErrors);
        }
        if(_isUniqConstraintViolated(err)) {
          err = _buildErrorWhenUniquEmail();
        }

        reply(validationErrorSerializer.serialize(err)).code(422);
      });

  }

};

function _buildErrorWhenRecaptchaTokenInvalid(errors) {
  return {
    data: errors
  };
}

function _buildErrorWhenUniquEmail() {
  return {
    data: {
      email: ['Cette adresse electronique est déjà enregistrée.']
    }
  };
}

