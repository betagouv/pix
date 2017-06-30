const {describe, it, after, afterEach, expect, knex} = require('../../test-helper');
const server = require('../../../server');
const Assessment = require('../../../lib/domain/models/data/assessment');

describe('Acceptance | API | Assessments POST', function () {

  after(function (done) {
    server.stop(done);
  });

  describe('POST /api/assessments', function () {

    afterEach(() => {
      return knex('assessments').delete();
    });

    const options = {
      method: 'POST', url: '/api/assessments', payload: {
        data: {
          type: 'assessment',
          attributes: {
            'user-name': 'Jon Snow',
            'user-email': 'jsnow@winterfell.got'
          },
          relationships: {
            course: {
              data: {
                type: 'course',
                id: 'non_adaptive_course_id'
              }
            }
          }
        }
      }
    };

    

    describe('when the user is not authenticated', () => {
      it('should return 201 HTTP status code', function () {
        const promise = server.inject(options);

        // Then
        return promise.then((response) => {
          expect(response.statusCode).to.equal(201);
        });
      });

      it('should return application/json', function () {
        // When
        const promise = server.inject(options);

        // Then
        return promise.then((response) => {
          const contentType = response.headers['content-type'];
          expect(contentType).to.contain('application/json');
        });
      });

      it('should add a new assessment into the database', function () {
        // when
        const promise = server.inject(options);

        // Then
        return promise.then(
          () => {
            return Assessment.count();
          })
          .then(function (afterAssessmentsNumber) {
            expect(afterAssessmentsNumber).to.equal(1);
          });
      });

      it('should persist the given course ID and user ID', function () {
        // when
        const promise = server.inject(options);

        // Then
        return promise.then(response => {
          return new Assessment({id: response.result.data.id}).fetch()
        })
        .then(function (model) {
          expect(model.get('courseId')).to.equal(options.payload.data.relationships.course.data.id);
          expect(model.get('userName')).to.equal(options.payload.data.attributes['user-name']);
          expect(model.get('userEmail')).to.equal(options.payload.data.attributes['user-email']);
        });
      });

      it('should return persisted assessement', function () {

        // when
        const promise = server.inject(options);

        // Then
        return promise.then((response) => {
          const assessment = response.result.data;

          // then
          expect(assessment.id).to.exist;
          expect(assessment.attributes['user-id']).to.equal(options.payload.data.attributes['user-id']);
          expect(assessment.attributes['user-name']).to.equal(options.payload.data.attributes['user-name']);
          expect(assessment.attributes['user-email']).to.equal(options.payload.data.attributes['user-email']);
          expect(assessment.relationships.course.data.id).to.equal(options.payload.data.relationships.course.data.id);
        });
      });
    });

  });

});
