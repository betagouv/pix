const jsonwebtoken = require('jsonwebtoken');

const settings = require('../../settings');

function createTokenFromUser(user) {
  return jsonwebtoken.sign({
    user_id: user.get('id'),
    email: user.get('email')
  }, settings.authentication.secret, { expiresIn: settings.authentication.tokenLifespan });
}


module.exports = {
  createTokenFromUser
};
