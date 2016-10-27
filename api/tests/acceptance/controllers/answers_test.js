'use strict';

const server = require('../../../server');
const Answer = require('../../../app/models/data/answer');

describe('API | Answers', function () {

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

  describe('POST /api/answers', function () {

    before(function (done) {
      nock('https://api.airtable.com')
        .get('/v0/test-base/Epreuves/challenge_id')
        .times(5)
        .reply(200, {
          "id": "recLt9uwa2dR3IYpi",
          "fields": {
            "Consigne": "Que peut-on dire des œufs de catégorie A ?\n",
            "description": "catégorie oeuf",
            "domaine": "1. Information et données",
            "compétence": "1.1. Mener une recherche d'information",
            "acquis": [
              "#menerUneRecherche"
            ],
            "Propositions": "- Ils sont bio.\n- Ils pèsent plus de 63 grammes.\n- Ce sont des oeufs frais.\n- Ils sont destinés aux consommateurs.\n- Ils ne sont pas lavés.\n",
            "id": 1,
            "Type d'épreuve": "QCM",
            "Tests": [
              "recgfTczeaXYoBLpw"
            ],
            "Reponses": [
              "rec9jYnyhKVY8GfzT",
              "recUGVxm7trYNtrd6",
              "rec26WCyBU11QqnC2"
            ],
            "_Preview Temp": "https://docs.google.com/presentation/d/11gVqLG0a6lCd-Vpw23nJGXGkxN-78B_nNnoMO4Xlui8/edit#slide=id.g147b5b7b8e_0_124",
            "_Statut": "validé",
            "Bonnes réponses": "3, 4, 5",
            "_Niveau": [
              "3"
            ],
            "Type péda": "e-preuve",
            "Auteur": [
              "NDE"
            ],
            "Déclinable": "facilement",
            "Internet et outils": "Oui",
            "Prototype d'épreuve": "oui",
            "Record ID": "recLt9uwa2dR3IYpi",
            "Preview": "http://development.pix.beta.gouv.fr/challenges/recLt9uwa2dR3IYpi/preview"
          },
          "createdTime": "2016-08-09T09:08:57.000Z"
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
      // given
      Answer.count().then(function (beforeAnswersNumber) {
        // when
        server.injectThen(options).then((response) => {
          Answer.count().then(function (afterAnswersNumber) {
            // then
            expect(afterAnswersNumber).to.equal(beforeAnswersNumber + 1);
            done();
          });
        });
      });
    });

    it("should persist the given course ID, the user ID, and the correctness of the answer", function (done) {

      // when
      server.injectThen(options).then((response) => {

        new Answer({ id: response.result.data.id })
          .fetch()
          .then(function (model) {
            expect(model.get('value')).to.equal(options.payload.data.attributes.value);
            expect(model.get('result')).to.have.length.above(1);
            expect(model.get('assessmentId')).to.equal(options.payload.data.relationships.assessment.data.id);
            expect(model.get('challengeId')).to.equal(options.payload.data.relationships.challenge.data.id);
            done();
          });

      });
    });

    it("should return persisted answer", function (done) {
      // when
      server.injectThen(options).then((response) => {
        const answer = response.result.data;

        // then
        expect(answer.id).to.exist;
        expect(answer.attributes.value).to.equal(options.payload.data.attributes.value);
        expect(answer.attributes.result).to.have.length.above(1);
        expect(answer.relationships.assessment.data.id).to.equal(options.payload.data.relationships.assessment.data.id);
        expect(answer.relationships.challenge.data.id).to.equal(options.payload.data.relationships.challenge.data.id);

        done();
      });
    });

  });

});
