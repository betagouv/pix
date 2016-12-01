const server = require('../../../server');
const Answer = require('../../../lib/domain/models/data/answer');

server.register(require('inject-then'));

describe('Acceptance | API | Answers', function () {

  before(function (done) {
    knex.migrate.latest().then(() => {
      knex.seed.run().then(() => {
        done();
      });
    });
  });

  after(function (done) {
    server.stop(done);
  });

  describe('POST /api/answers (create)', function () {

    beforeEach(function (done) {
     knex('answers').delete().then(() => {done();});
    });
    afterEach(function (done) {
     knex('answers').delete().then(() => {done();});
    });

    before(function (done) {
      nock('https://api.airtable.com')
        .get('/v0/test-base/Epreuves/challenge_id')
        .times(5)
        .reply(200, {
          "id": "recLt9uwa2dR3IYpi",
          "fields": {
            "Type d'épreuve": "QCU",
            "Bonnes réponses": "1"
            //other fields not represented
          }
        });
      done();
    });

    const options = {
      method: "POST", url: "/api/answers", payload: {
        data: {
          type: 'answer',
          attributes: {
            value: "1"
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

    it("should return 201 HTTP status code", function (done) {
      server.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(201);
        done();
      });
    });

    it("should return application/json", function (done) {
      server.injectThen(options).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it("should add a new answer into the database", function (done) {
        server.injectThen(options).then((response) => {
          Answer.count().then(function (afterAnswersNumber) {
            expect(afterAnswersNumber).to.equal(1);
            done();
          });
        });
    });

    it("should return persisted answer", function (done) {
      // when
      server.injectThen(options).then((response) => {
        const answer = response.result.data;

        new Answer()
          .fetch()
          .then(function (model) {
            expect(model.id).to.be.a('number')
            expect(model.get('value')).to.equal(options.payload.data.attributes.value);
            expect(model.get('result')).to.equal('ok');
            expect(model.get('assessmentId')).to.equal(options.payload.data.relationships.assessment.data.id);
            expect(model.get('challengeId')).to.equal(options.payload.data.relationships.challenge.data.id);

            // then
            expect(answer.id).to.equal(model.id);
            expect(answer.id).to.equal(response.result.data.id);
            expect(answer.attributes.value).to.equal(model.get('value'));
            expect(answer.attributes.result).to.equal(model.get('result'));
            expect(answer.relationships.assessment.data.id).to.equal(model.get('assessmentId'));
            expect(answer.relationships.challenge.data.id).to.equal(model.get('challengeId'));

            done();
          });


      });
    });

  });



  /* Update
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  describe('POST /api/answers (update)', function () {

    const options = {
      method: "POST", url: "/api/answers", payload: {
        data: {
          type: 'answer',
          attributes: {
            value: "1"
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

    beforeEach(function (done) {
     knex('answers').delete().then(() => {
      server.injectThen(options).then((response) => {
        done();
      });
     });
    });
    afterEach(function (done) {
     knex('answers').delete().then(() => {done();});
    });

    before(function (done) {
      nock('https://api.airtable.com')
        .get('/v0/test-base/Epreuves/challenge_id')
        .times(5)
        .reply(200, {
          "id": "recLt9uwa2dR3IYpi",
          "fields": {
            "Type d'épreuve": "QCU",
            "Bonnes réponses": "1"
            //other fields not represented
          }
        });
      done();
    });



    it("should return 200 HTTP status code", function (done) {
      server.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("should return application/json", function (done) {
      server.injectThen(options).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it("should not add a new answer into the database", function (done) {
        server.injectThen(options).then((response) => {
          Answer.count().then(function (afterAnswersNumber) {
            expect(afterAnswersNumber).to.equal(1);
            done();
          });
        });
    });

    it("should return updated answer", function (done) {
      // when
      server.injectThen(options).then((response) => {
        const answer = response.result.data;

        new Answer()
          .fetch()
          .then(function (model) {
            expect(model.id).to.be.a('number')
            expect(model.get('value')).to.equal(options.payload.data.attributes.value);
            expect(model.get('result')).to.equal('ok');
            expect(model.get('assessmentId')).to.equal(options.payload.data.relationships.assessment.data.id);
            expect(model.get('challengeId')).to.equal(options.payload.data.relationships.challenge.data.id);

            // then
            expect(answer.id).to.equal(model.id);
            expect(answer.id).to.equal(response.result.data.id);
            expect(answer.attributes.value).to.equal(model.get('value'));
            expect(answer.attributes.result).to.equal(model.get('result'));
            expect(answer.relationships.assessment.data.id).to.equal(model.get('assessmentId'));
            expect(answer.relationships.challenge.data.id).to.equal(model.get('challengeId'));

            done();
          });
      });
    });
    

  });


});
