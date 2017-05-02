const JSONAPISerializer = require('./jsonapi-serializer');
const User = require('../../../domain/models/data/user');

class AnswerSerializer extends JSONAPISerializer {

  constructor() {
    super('user');
  }

  serializeAttributes(model, data) {
    data.attributes['firstName'] = model.firstName;
    data.attributes['lastName'] = model.lastName;
  }


  deserialize(json) {
    return new User({
      id: json.data.id,
      firstName: json.data.attributes.firstName,
      lastName: json.data.attributes.lastName,
      email: json.data.attributes.email,
      password: json.data.attributes.password,
      cgu: json.data.attributes.cgu,
    });
  }

}

module.exports = new AnswerSerializer();
