const { Serializer } = require('jsonapi-serializer');

module.exports = {

  serialize(snapshots) {
    return new Serializer('password-reset-demand', {
      attributes: ['email', 'temporaryKey']
    }).serialize(snapshots);
  }

};
