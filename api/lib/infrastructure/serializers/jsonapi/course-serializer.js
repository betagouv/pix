const { Serializer } = require('jsonapi-serializer');

module.exports = {

  serialize(courses) {
    return new Serializer('course', {
      attributes: ['name', 'description', 'duration', 'isAdaptive', 'nbChallenges', 'type', 'imageUrl'],
      transform(record) {
        const course = Object.assign({}, record);
        course.type = (record.isAdaptive)? 'PLACEMENT' : 'DEMO';
        if (record.challenges) {
          course.nbChallenges = record.challenges.length;
        }

        return course;
      }
    }).serialize(courses);
  }

};
