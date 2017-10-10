const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
  serializeUser(user) {
    return new JSONAPISerializer('user', {
      attributes: ['firstName', 'lastName'],
      transform(user) {
        user.id = user.id.toString();
        return user;
      }
    }).serialize(user);
  },

  serializeResetDemand(passwordResets) {
    return new JSONAPISerializer('password-reset', {
      attributes: ['email', 'temporaryKey'],
      transform(passwordReset) {
        passwordReset.id = passwordReset.id.toString();
        return passwordReset;
      }
    }).serialize(passwordResets);
  }
};
