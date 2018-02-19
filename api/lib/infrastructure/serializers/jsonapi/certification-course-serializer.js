const { Serializer } = require('jsonapi-serializer');
const CertificationCourse = require('../../data/certification-course')

module.exports = {

  serialize(certificationCourse) {

    return new Serializer('course', {
      attributes: ['userId', 'assessment', 'status', 'type', 'nbChallenges'],
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

  serializeResult(certificationCourseResult) {
    return new Serializer('results', {
      attributes: ['pixScore', 'createdAt', 'completedAt', 'competencesWithMark']
    }).serialize(certificationCourseResult);
  },

  deserialize(json) {
    return new CertificationCourse({
      id: json.data.id,
      createdAt: json.data.attributes.createdAt,
      updatedAt: json.data.attributes.updatedAt,
      userId: json.data.attributes.userId,
      status: json.data.attributes.status,
      completedAt: json.data.attributes.completedAt,
      firstName: json.data.attributes.firstName,
      lastName: json.data.attributes.lastName,
      birthdate: json.data.attributes.birthdate,
      birthplace: json.data.attributes.birthplace,
      rejectionReason: json.data.attributes.rejectionReason
    });
  }
};
