const { Serializer } = require('jsonapi-serializer');

module.exports = {
  serialize(passwordResetDemands) {
    return new Serializer('password-reset-demand', {
      attributes: ['email', 'temporaryKey'],
      transform(passwordResetDemand) {
        passwordResetDemand.id = passwordResetDemand.id.toString();
        return passwordResetDemand;
      }
    }).serialize(passwordResetDemands);
  }
};
