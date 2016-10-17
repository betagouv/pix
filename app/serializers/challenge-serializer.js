'use strict';

const JSONAPISerializer = require('./jsonapi-serializer');

class ChallengeSerializer extends JSONAPISerializer {

  constructor() {
    super('challenge');
  }

  serializeAttributes(entity, data) {
    data.attributes.type = entity.type;
    data.attributes.instruction = entity.instruction;
    data.attributes.proposals = entity.proposals;
  }

  deserialize() {
  }

}

module.exports = new ChallengeSerializer();
