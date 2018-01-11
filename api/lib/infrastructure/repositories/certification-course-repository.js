const CertificationCourseBookshelf = require('../../domain/models/data/certification-course');
const CertificationCourse = require('../../domain/models/CertificationCourse');
const { NotFoundError } = require('../../domain/errors');

function _toDomain(model) {
  return new CertificationCourse({
    id: model.get('id'),
    userId: model.get('userId'),
    status: model.get('status'),
    type: 'CERTIFICATION',
    assessments: model.related('assessments').toJSON(),
    challenges: model.related('challenges').toJSON()
  });
}

module.exports = {

  save(certificationCourseDomainModel) {
    const certificationCourseBookshelf = new CertificationCourseBookshelf(certificationCourseDomainModel);
    return certificationCourseBookshelf.save()
      .then(_toDomain);
  },

  updateStatus(status, certificationCourseId) {
    const certificationCourseBookshelf = new CertificationCourseBookshelf({ id: certificationCourseId, status });
    return certificationCourseBookshelf.save();
  },

  get(id) {
    let certificationCourse;
    return CertificationCourseBookshelf
      .where({ id })
      .fetch({ require: true, withRelated: ['assessments', 'challenges'] })
      .then(_toDomain)
      .catch(() => {
        return Promise.reject(new NotFoundError());
      });
  }

};
