const { Serializer } = require('jsonapi-serializer');
const Organization = require('../../../domain/models/data/organization');

module.exports = {

  serialize(snapshots) {
    return new Serializer('organizations', {
      attributes: ['name', 'type', 'email', 'code', 'user'],
      user: {
        ref: 'id',
        attributes: ['firstName', 'lastName', 'email']
      },
      transform: (snapshot) => {
        const organization = Object.assign({}, snapshot.toJSON());
        organization.user = snapshot.user.toJSON();
        return organization;
      }
    }).serialize(snapshots);
  },

  deserialize(json) {
    return new Organization({
      email: json.data.attributes.email,
      type: json.data.attributes.type,
      name: json.data.attributes.name,
    });
  }

};
