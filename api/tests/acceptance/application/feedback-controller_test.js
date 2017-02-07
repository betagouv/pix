const { describe, it, after, beforeEach, afterEach, expect, knex } = require('../../test-helper');
const server = require('../../../server');
const Feedback = require('../../../lib/domain/models/data/feedback');

server.register(require('inject-then'));

describe('Acceptance | Controller | feedback-controller', function () {

  after(function (done) {
    server.stop(done);
  });

  describe('POST /api/feedbacks', function () {

    beforeEach(function (done) {
      knex('feedbacks').delete().then(() => done() );
    });

    afterEach(function (done) {
      knex('feedbacks').delete().then(() => done());
    });

    const options = {
      method: 'POST', url: '/api/feedbacks', payload: {
        data: {
          type: 'feedbacks',
          attributes: {
            email: 'shi@fu.me',
            content: 'Some content'
          },
          relationships: {
            assessment: {
              data: {
                type: 'assessment',
                id: 'assessment_id'
              }
            },
            challenge: {
              data: {
                type: 'challenge',
                id: 'challenge_id'
              }
            }
          }
        }
      }
    };

    it('should return 201 HTTP status code', function (done) {
      server.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(201);
        done();
      });
    });

    it('should return application/json', function (done) {
      server.injectThen(options).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it('should add a new feedback into the database', function (done) {
      server.injectThen(options).then(() => {
        Feedback.count().then((afterFeedbacksNumber) => {
          expect(afterFeedbacksNumber).to.equal(1);
          done();
        });
      });
    });

    it('should return persisted feedback', function (done) {
      // when
      server.injectThen(options).then((response) => {
        const feedback = response.result.data;

        // then
        new Feedback()
          .fetch()
          .then(function (model) {
            expect(model.id).to.be.a('number');
            expect(model.get('email')).to.equal(options.payload.data.attributes.email);
            expect(model.get('content')).to.equal(options.payload.data.attributes.content);
            expect(model.get('assessmentId')).to.equal(options.payload.data.relationships.assessment.data.id);
            expect(model.get('challengeId')).to.equal(options.payload.data.relationships.challenge.data.id);

            expect(feedback.id).to.equal(model.id);
            expect(feedback.id).to.equal(response.result.data.id);
            expect(feedback.attributes.email).to.equal(model.get('email'));
            expect(feedback.attributes.content).to.equal(model.get('content'));
            expect(feedback.relationships.assessment.data.id).to.equal(model.get('assessmentId'));
            expect(feedback.relationships.challenge.data.id).to.equal(model.get('challengeId'));

            done();
          });
      });
    });

  });

});
