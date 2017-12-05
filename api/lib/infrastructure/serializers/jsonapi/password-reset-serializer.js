const { Serializer } = require('jsonapi-serializer');

module.exports = {
  serialize(password) {
    return new Serializer('password-reset-demand', {
      attributes: ['email', 'temporaryKey']
    }).serialize(password);
  }
};
