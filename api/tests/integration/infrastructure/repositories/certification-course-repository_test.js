const { expect, describe, beforeEach, afterEach, it, knex } = require('../../../test-helper');
const CertificationCourseRepository = require('../../../../lib/infrastructure/repositories/certification-course-repository');
const CertificationCourseBookshelf = require('../../../../lib/domain/models/data/certification-course');
const CertificationCourse = require('../../../../lib/domain/models/CertificationCourse');

describe('Integration | Repository | Certification Course', function() {

  const certificationCourse = {
    id: 1,
    status: 'started'
  };

  beforeEach(() => {
    return knex('certification-courses').insert(certificationCourse);
  });

  afterEach(() => {
    return knex('certification-courses').delete();
  });

  describe('#updateStatus', () => {

    it('should update status of the certificationCourse', () => {
      // when
      const promise = CertificationCourseRepository.updateStatus('completed', 1);

      // then
      return promise.then(() => knex('certification-courses').first('id', 'status'))
        .then((certificationCourse) => {
          expect(certificationCourse.status).to.equal('completed')
        });
    });
  });
});

