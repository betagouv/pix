const tokenService = require('../../../lib/domain/services/token-service');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {
  verifyByToken(request, reply) {
    return tokenService.verifyValidity(request.headers.authorization)
      .then(reply)
      .catch(() => {
        const buildedError = {data: { authorization : 'Vous n’êtes pas autorisé à passer un test de certification'}};
        return reply(validationErrorSerializer.serialize(buildedError)).code(401).takeover();
      });
  }
};
