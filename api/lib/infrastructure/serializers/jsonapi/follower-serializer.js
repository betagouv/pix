const { Serializer } = require('jsonapi-serializer');
const Follower = require('../../../domain/models/data/follower');

module.exports = {

  serialize(snapshots) {
    return new Serializer('follower', {
      attributes: ['email'],
      transform: (snapshot) => snapshot.toJSON()
    }).serialize(snapshots);
  },

  deserialize(jsonApi) {
    return new Follower({
      email: jsonApi.data.attributes.email
    });
  }

};
