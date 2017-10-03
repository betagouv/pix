const JSONAPISerializer = require('jsonapi-serializer').Serializer;

class passwordResetSerializer {

  serialize(passwordResets) {
    return new JSONAPISerializer('password-reset', {
      attributes: ['email', 'temporaryKey'],
      transform(passwordReset) {
        passwordReset.id = passwordReset.id.toString();
        return passwordReset;
      }
    }).serialize(passwordResets);
  }

}

module.exports = new passwordResetSerializer();
