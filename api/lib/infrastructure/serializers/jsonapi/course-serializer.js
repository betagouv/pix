const JSONAPISerializer = require('./jsonapi-serializer');

class CourseSerializer extends JSONAPISerializer {

  constructor() {
    super('course');
  }

  serializeAttributes(model, data) {
    data.attributes['name'] = model.name;
    data.attributes['description'] = model.description;
    data.attributes['duration'] = model.duration;
    data.attributes['is-adaptive'] = model.isAdaptive;
    data.attributes['nb-challenges'] = model.challenges.length;

    if (model.imageUrl) {
      data.attributes['image-url'] = model.imageUrl;
    }
  }

}

module.exports = new CourseSerializer();
