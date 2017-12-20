const { Serializer } = require('jsonapi-serializer');

module.exports = {

  serialize(certificationCourse) {

    return new Serializer('course', {
      attributes : ['userId', 'assessment', 'status', 'type'],
      assessment: {
        ref: 'id',
      },
      transform(record) {
        record.userId = record.userId.toString();
        record.type = 'CERTIFICATION';
        return record;
      }
    }).serialize(certificationCourse);
  },
};
