const { Serializer } = require('jsonapi-serializer');

module.exports = {

  serialize(courseGroups) {
    return new Serializer('course-group', {
      attributes: ['name', 'courses'],
      courses: {
        ref: 'id',
        attributes: ['description', 'imageUrl', 'name', 'nbChallenges'],
        included: true,
      },
      transform(record) {
        const courseGroup = Object.assign({}, record);
        if (courseGroup.courses) {
          courseGroup.courses.forEach((course) => {
            course.nbChallenges = 0;
            if (course.challenges) {
              course.nbChallenges = course.challenges.length;
            }
          });
        }
        return courseGroup;
      }
    }).serialize(courseGroups);
  }

};
