const CertificationCourseBookshelf = require('../../domain/models/data/certification-course');
const CertificationCourse = require('../../domain/models/CertificationCourse');

function _toDomain(model) {
  return new CertificationCourse({
    id: model.get('id'),
    userId: model.get('userId')
  });
}

module.exports = {

  save(certificationCourseDomainModel) {
    const certificationCourse = new CertificationCourseBookshelf(certificationCourseDomainModel);
    return certificationCourse.save()
      .then((savedCertificationCourse) => {
        return _toDomain(savedCertificationCourse);
      });
  }
};
