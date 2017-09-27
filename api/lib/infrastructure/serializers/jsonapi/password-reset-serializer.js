const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
  serialize(user) {
    return new JSONAPISerializer('user', {
      attributes: ['firstName', 'lastName'],
      transform(user) {
        user.id = user.id.toString();
        return user;
      }
    }).serialize(user);
  }
};
