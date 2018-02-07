const encrypt = require('../../domain/services/encryption-service');
const tokenService = require('../../domain/services/token-service');

const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

const Authentication = require('../../domain/models/Authentication');
const authenticationSerializer = require('../../infrastructure/serializers/jsonapi/authentication-serializer');
const UserRepository = require('../../infrastructure/repositories/user-repository');
const UserSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');

module.exports = {
  save(request, reply) {

    let user = UserSerializer.deserialize((request.payload));

    return UserRepository.findByEmail(user.email)
      .then(foundUser => {

        if (foundUser === null) {
          return Promise.reject();
        }

        user = foundUser;
        return encrypt.check(user.password, foundUser.get('password'));
      })
      .then(_ => {
        const token = tokenService.createTokenFromUser(user);

        const authentication = new Authentication(user.get('id'), token);
        return reply(authenticationSerializer.serialize(authentication)).code(201);
      })
      .catch(() => {
        const message = validationErrorSerializer.serialize(_buildError());
        reply(message).code(400);
      });
  }
};

function _buildError() {
  return {
    data: {
      '': [ 'L\'adresse e-mail et/ou le mot de passe saisi(s) sont incorrects.' ]
    }
  };
}
