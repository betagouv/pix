const { expect } = require('../../../../test-helper');
const serializer = require('../../../../../lib/infrastructure/serializers/jsonapi/certification-course-serializer');
const Assessment = require('../../../../../lib/domain/models/Assessment');
const CertificationCourse = require('../../../../../lib/domain/models/CertificationCourse');

const { WrongDateFormatError } = require('../../../../../lib/domain/errors');

describe('Unit | Serializer | JSONAPI | certification-course-serializer', function() {

  describe('#serialize()', function() {

    it('should convert a Certification Course model object into JSON API data', function() {
      // given
      const assessment = new Assessment({
        'id': '2'
      });

      const certificationCourse = new CertificationCourse({
        id: 'certification_id',
        userId : 2,
        status : 'completed',
        assessment: assessment,
        nbChallenges: 3
      });

      const jsonCertificationCourseWithAssessment = {
        data: {
          type: 'courses',
          id: 'certification_id',
          attributes : {
            'user-id': '2',
            'status' : 'completed',
            'type' : 'CERTIFICATION',
            'nb-challenges': 3
          },
          relationships: {
            assessment: {
              data: {
                id: '2',
                type: 'assessments'
              }
            }
          }
        }
      };

      // when
      const json = serializer.serialize(certificationCourse);

      // then
      expect(json).to.deep.equal(jsonCertificationCourseWithAssessment);
    });
  });

  describe('#deserialize', function() {

    const jsonCertificationCourse = {
      data: {
        type: 'courses',
        id: 'certification_id',
        attributes : {
          'status':  'rejected',
          'firstName': 'Freezer',
          'lastName': 'The all mighty',
          'birthplace': 'Namek',
          'birthdate': '24/10/1989',
          'rejectionReason': 'Killed all citizens'
        }
      }
    };

    it('should convert a JSON API data into a Certification Course object', function() {
      // when
      const certificationCourse = serializer.deserialize(jsonCertificationCourse);

      // then
      expect(certificationCourse.id).to.equal('certification_id');
      expect(certificationCourse.status).to.equal('rejected');
      expect(certificationCourse.firstName).to.equal('Freezer');
      expect(certificationCourse.lastName).to.equal('The all mighty');
      expect(certificationCourse.birthplace).to.equal('Namek');
      expect(certificationCourse.birthdate).to.equal('1989-10-24');
      expect(certificationCourse.rejectionReason).to.equal('Killed all citizens');
    });

    it('should return an error if date is in wrong format', function() {
      // given
      jsonCertificationCourse.data.attributes.birthdate = '2015-32-12';

      // then
      expect(() => serializer.deserialize(jsonCertificationCourse)).to.throw(WrongDateFormatError);
    });
  });
});
