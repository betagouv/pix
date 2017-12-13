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
    const certificationCourseBookshelf = new CertificationCourseBookshelf(certificationCourseDomainModel);
    return certificationCourseBookshelf.save()
      .then(_toDomain);
  },

  updateStatus(status, certificationCourseId) {
    const certificationCourseBookshelf = new CertificationCourseBookshelf({id: certificationCourseId, status});
    return certificationCourseBookshelf.save();
  }

};
