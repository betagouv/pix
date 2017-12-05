const { Serializer } = require('jsonapi-serializer');
const User = require('../../../domain/models/data/user');

module.exports = {

  serialize(snapshots) {
    return new Serializer('user', {
      attributes: ['firstName', 'lastName'],
      transform: (snapshot) => snapshot.toJSON()
    }).serialize(snapshots);
  },

  deserialize(json) {
    return new User({
      id: json.data.id,
      firstName: json.data.attributes['first-name'],
      lastName: json.data.attributes['last-name'],
      email: json.data.attributes.email,
      password: json.data.attributes.password,
      cgu: json.data.attributes.cgu
    });
  }

};
