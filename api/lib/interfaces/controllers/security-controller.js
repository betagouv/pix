const logger = require('../../infrastructure/logger');
const tokenService = require('../../domain/services/token-service');
const checkUserIsAuthenticatedUseCase = require('../../application/usecases/checkUserIsAuthenticated');
const checkUserHasRolePixMasterUseCase = require('../../application/usecases/checkUserHasRolePixMaster');
const JSONAPIError = require('jsonapi-serializer').Error;

const replyWithAuthenticationError = (reply) => {
  return Promise.resolve().then(() => {
    const errorHttpStatusCode = 401;
    const jsonApiError = new JSONAPIError({
      code: errorHttpStatusCode,
      title: 'Unauthorized access',
      detail: 'Missing or invalid access token in request auhorization headers.'
    });
    return reply(jsonApiError).code(errorHttpStatusCode).takeover();
  });
};

const replyWithAuthorizationError = (reply) => {
  return Promise.resolve().then(() => {
    const errorHttpStatusCode = 403;
    const jsonApiError = new JSONAPIError({
      code: errorHttpStatusCode,
      title: 'Forbidden access',
      detail: 'Unauthenticated user or missing role PIX_MASTER.'
    });
    return reply(jsonApiError).code(errorHttpStatusCode).takeover();
  });
};

module.exports = {

  checkUserIsAuthenticated(request, reply) {
    const authorizationHeader = request.headers.authorization;
    const accessToken = tokenService.extractTokenFromAuthChain(authorizationHeader);

    if (!accessToken) {
      return replyWithAuthenticationError(reply);
    }

    return checkUserIsAuthenticatedUseCase.execute(accessToken)
      .then(isAuthenticated => {
        if (isAuthenticated) {
          return reply.continue({ credentials: { accessToken } });
        }
        return replyWithAuthenticationError(reply);
      })
      .catch(err => {
        logger.error(err);
        return replyWithAuthenticationError(reply);
      });
  },

  checkUserHasRolePixMaster(request, reply) {
    if (!request.auth.credentials || !request.auth.credentials.accessToken) {
      return replyWithAuthorizationError(reply);
    }

    const accessToken = request.auth.credentials.accessToken;

    return checkUserHasRolePixMasterUseCase.execute(accessToken)
      .then(hasRolePixMaster => {
        if (hasRolePixMaster) {
          return reply(true);
        }
        return replyWithAuthorizationError(reply);
      })
      .catch(err => {
        logger.error(err);
        return replyWithAuthorizationError(reply);
      });
  }

};
