const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {

  serialize(snapshots) {
    return new JSONAPISerializer('course', {
      attributes: ['name', 'description', 'duration', 'isAdaptive', 'nbChallenges', 'imageUrl'],
      transform(snapshot) {
        const course = Object.assign({}, snapshot);
        if (snapshot.challenges) {
          course.nbChallenges = snapshot.challenges.length;
        }
        return course;
      }
    }).serialize(snapshots);
  }

};
