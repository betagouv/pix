'use strict';

const JSONAPISerializer = require('./jsonapi-serializer');

class UserSerializer extends JSONAPISerializer {

  constructor() {
    super('users');
  }

  serializeAttributes(model, data) {
    data.attributes["email"] = model.email;
    data.attributes["first-name"] = model.firstName;
    data.attributes["last-name"] = model.lastName;
  }
}

module.exports = new UserSerializer();
