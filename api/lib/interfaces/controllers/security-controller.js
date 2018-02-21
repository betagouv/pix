const tokenService = require('../../domain/services/token-service');
const logger = require('../../infrastructure/logger');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {

  assertThatUserHasAValidAccessToken(request, reply) {
    const accessToken = tokenService.extractTokenFromAuthChain(request.headers.authorization);

    return tokenService.verifyValidity(accessToken)
      .then(() => reply.continue({ credentials: { accessToken } }))
      .catch(err => {
        logger.error(err);
        const errorData = {
          data: {
            authorization: ['Le token n’est pas valide']
          }
        };
        const errorAsJsonApi = validationErrorSerializer.serialize(errorData);
        reply(errorAsJsonApi).code(401).takeover();
      });
  },

};
