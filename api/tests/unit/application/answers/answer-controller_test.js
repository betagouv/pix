const { describe, it, before, after, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const Answer = require('../../../../lib/domain/models/data/answer');
const solutionRepository = require('../../../../lib/infrastructure/repositories/solution-repository');
const solutionService = require('../../../../lib/domain/services/solution-service');

describe('Unit | Controller | answer-controller', function () {

  let server;

  before(function () {
    server = this.server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/answers') });
  });


  function executeRequest(payload, callback) {
    server.inject({ method: 'POST', url: '/api/answers', payload }, (res) => {
      callback(res);
    });
  }

  const jsonAnswer = {
    'data': {
      'attributes': {
        'value': 'NumA = "4", NumB = "1", NumC = "3", NumD = "2"',
        'result': null,
        'timeout': null
      },
      'relationships': {
        'assessment': {
          'data': {
            'type': 'assessments',
            'id': 12
          }
        },
        'challenge': {
          'data': {
            'type': 'challenges',
            'id': 'recdTpx4c0kPPDTtf'
          }
        }
      },
      'type': 'answers'
    }
  };

  const persistedAnswer = new Answer({
    id: '1234',
    value: '2',
    result: '',
    resultQrocmDetails: 'NumA: "ok",\nNumB: "ko",\nNumC: "empty",\nNumD: "ok"',
    assessmentId: 12,
    challengeId: 'recdTpx4c0kPPDTtf',
    timeout: null
  });

  before(function () {
    Answer.prototype.save = sinon.stub();
    Answer.prototype.save.resolves(persistedAnswer);
  });

  after(function () {
    sinon.restore(Answer.prototype.save);
  });

  describe.only('#save', function () {

    it.skip('should return a successful response with HTTP code 201 when answer was saved', function (done) {
      // given
      sinon.stub(solutionRepository, 'get').resolves(null);
      sinon.stub(solutionService, 'match').returns('ok');

      // when
      executeRequest(jsonAnswer, (res) => {
        // then
        expect(res.statusCode).to.equal(201);

        // after
        solutionRepository.get.restore();
        solutionService.match.restore();
        done();
      });
    });

    it('should return the field "resultQrocmDetails"', function (done) {
      // given
      sinon.stub(solutionRepository, 'get').resolves(null);
      sinon.stub(solutionService, 'match').returns('ok');

      // when
      executeRequest(jsonAnswer, (res) => {
        // then
        expect(res.result.data.attributes.resultQrocmDetails).to.equal(persistedAnswer.get('resultQrocmDetails'));

        // after
        solutionRepository.get.restore();
        solutionService.match.restore();
        done();
      });
    });
  });
});

