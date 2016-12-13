const JSONAPISerializer = require('./jsonapi-serializer');

class CourseSerializer extends JSONAPISerializer {

  constructor() {
    super('courses');
  }

  serializeAttributes(model, data) {
    data.attributes['name'] = model.name;
    data.attributes['description'] = model.description;
    data.attributes['duration'] = model.duration;
    data.attributes['is-adaptive'] = model.isAdaptive;

    if (model.imageUrl) {
      data.attributes['image-url'] = model.imageUrl;
    }
  }

  serializeRelationships(model, data) {
    data.relationships = {
      challenges: {
        data: []
      }
    };
    if (model.challenges) {
      for (const challengeId of model.challenges) {
        console.log('XXXXXXXX bulllllll bull bulll');
        // XXX unshift instead of push: https://github.com/Airtable/airtable.js/issues/17
        data.relationships.challenges.data.unshift({
          'type': 'challenges',
          'id': challengeId
        });
      }
    }
  }

}

module.exports = new CourseSerializer();
