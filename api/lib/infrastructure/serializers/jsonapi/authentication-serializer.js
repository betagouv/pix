const { Serializer } = require('jsonapi-serializer');

module.exports = {

  serialize(authentication) {

    return new Serializer('authentication', {
      attributes: ['token', 'user_id', 'password'],
      transform(record) {
        record.user_id = record.user_id.toString();
        record.id = record.user_id;
        record.password = '';
        return record;
      }
    }).serialize(authentication);
  }

};
