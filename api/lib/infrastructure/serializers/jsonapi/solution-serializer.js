const { Serializer } = require('jsonapi-serializer');

module.exports = {

  serialize(snapshots) {
    return new Serializer('solutions', {
      attributes: ['value']
    }).serialize(snapshots);
  }

};
