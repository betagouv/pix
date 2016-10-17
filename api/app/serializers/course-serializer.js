'use strict';

const JSONAPISerializer = require('./jsonapi-serializer');

class CourseSerializer extends JSONAPISerializer {

  constructor() {
    super('course');
  }

  serializeAttributes(entity, data) {
    data.attributes.name = entity.name;
    data.attributes.description = entity.description;
    data.attributes.duration = entity.duration;
  }

  serializeRelationships(entity, data) {
    if (entity.challenges) {
      data.relationships = {
        challenges: {
          data: []
        }
      };
      for (let id of entity.challenges) {
        data.relationships.challenges.data.push({
          type: 'challenge',
          id
        });
      }
    }
  }

  deserialize() {
  }

}

module.exports = new CourseSerializer();
