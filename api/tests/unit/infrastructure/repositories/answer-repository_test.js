const { sinon } = require('../../../test-helper');

const AnswerRepository = require('../../../../lib/infrastructure/repositories/answer-repository');
const Answer = require('../../../../lib/infrastructure/data/answer');

describe('Unit | Repository | AnswerRepository', () => {

  describe('#findCorrectAnswersByAssessment', () => {
    let fetchAllStub;

    beforeEach(() => {
      sinon.stub(Answer.prototype, 'where');
      fetchAllStub = sinon.stub();
    });

    afterEach(() => Answer.prototype.where.restore());

    it('should retrieve answers with ok status from assessment id provided', () => {
      // given
      const assessmentId = 'assessment_id';
      fetchAllStub.resolves({});
      Answer.prototype.where.returns({
        fetchAll: fetchAllStub
      });

      // when
      const promise = AnswerRepository.findCorrectAnswersByAssessment(assessmentId);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(Answer.prototype.where);
        sinon.assert.calledWith(Answer.prototype.where, { assessmentId, result: 'ok' });
        sinon.assert.calledOnce(fetchAllStub);
      });
    });
  });

});
