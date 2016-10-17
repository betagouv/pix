'use strict';

const JSONAPISerializer = require('./jsonapi-serializer');

class CourseSerializer extends JSONAPISerializer {

  constructor() {
    super('course');
  }

  serializeAttributes(model, data) {
    data.attributes.name = model.name;
    data.attributes.description = model.description;
    data.attributes.duration = model.duration;
  }

  serializeRelationships(model, data) {
    if (model.challenges) {
      data.relationships = {
        challenges: {
          data: []
        }
      };
      for (let challengeId of model.challenges) {
        data.relationships.challenges.data.push({
          type: 'challenge',
          id: challengeId
        });
      }
    }
  }

}

module.exports = new CourseSerializer();
