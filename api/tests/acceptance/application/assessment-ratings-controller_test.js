const { describe, it, after, beforeEach, afterEach, expect, knex } = require('../../test-helper');
const server = require('../../../server');

describe('Acceptance | Controller | assessment-ratings', function() {

  after((done) => {
    server.stop(done);
  });

  describe('POST /api/assessment-ratings', () => {

    context('when the assessment is a PREVIEW', () => {

      let options;

      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/assessment-ratings',
          payload: {
            data: {
              attributes: {
                'estimated-level': null,
                'pix-score': null
              },
              relationships: {
                assessment: {
                  data: {
                    type: 'assessments',
                    id: '22'
                  }
                }
              },
              type: 'assessment-ratings'
            }
          }
        };

        return knex('assessments').insert({
          courseId: 'nullCourseId_for_preview',
          estimatedLevel: null,
          pixScore: null,
          type: 'PREVIEW'
        });
      });

      afterEach(() => {
        return knex('assessments').delete();
      });

      it('should return the estimated level and the score at 0', () => {
        // when
        const request = server.inject(options);

        // Then
        return request.then((response) => {
          expect(response.statusCode).to.equal(200);
          expect(response.result).to.deep.equal({
            data: {
              id: '1',
              type: 'assessment-ratings',
              attributes: {
                'estimated-level': 0,
                'pix-score': 0
              },
              relationships: {
                assessment: {
                  data: {
                    type: 'assessments',
                    id: '22'
                  }
                }
              }
            }
          });
        });
      });
    });
  });

});
