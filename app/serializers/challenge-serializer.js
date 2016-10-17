'use strict';

const JSONAPISerializer = require('./jsonapi-serializer');

class ChallengeSerializer extends JSONAPISerializer {

  constructor() {
    super('challenge');
  }

  serializeAttributes(model, data) {
    data.attributes.type = model.type;
    data.attributes.instruction = model.instruction;
    data.attributes.proposals = model.proposals;
  }

}

module.exports = new ChallengeSerializer();
