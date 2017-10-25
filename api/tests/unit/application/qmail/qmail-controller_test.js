const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const AnswerRepository = require('../../../../lib/infrastructure/repositories/answer-repository');
const Answer = require('../../../../lib/domain/models/data/answer');
const QmailController = require('../../../../lib/application/qmail/qmail-controller');
const Boom = require('boom');

describe('Unit | Controller | qmailController', () => {

  describe('#validate', () => {

    let answer;
    let replyStub;
    let codeStub;
    const challengeId = 'recLt9uwaETr3I24pi';
    const assessmentId = '35672';

    const emailSample = {
      mail: {
        to: {
          value: [],
          html: `<span class="mp_address_group"><a href="mailto:${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr" class="mp_address_email">${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr</a></span>`,
          text: `${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr`
        }
      },
      headers: {
        to: {
          value: [],
          html: `<span class="mp_address_group"><a href="mailto:${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr" class="mp_address_email">${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr</a></span>`,
          text: `${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr`
        }
      }
    };

    beforeEach(() => {
      codeStub = sinon.stub();
      replyStub = sinon.stub().returns({
        code: codeStub
      });

      answer = new Answer({ result: 'pending' });
      sinon.stub(answer, 'save').resolves();
      sinon.stub(AnswerRepository, 'findByChallengeAndAssessment').resolves(answer);
    });

    afterEach(() => {
      AnswerRepository.findByChallengeAndAssessment.restore();
    });

    it('should load the answer', () => {
      // When
      QmailController.validate({
        payload: emailSample
      }, replyStub);

      // Then
      sinon.assert.calledOnce(AnswerRepository.findByChallengeAndAssessment);
      sinon.assert.calledWith(AnswerRepository.findByChallengeAndAssessment, challengeId, assessmentId);
    });

    it('should validate the answer', () => {
      // When
      const promise = QmailController.validate({ payload: emailSample }, replyStub);

      // Then
      return promise.then(() => {
        sinon.assert.calledOnce(answer.save);
        expect(answer.get('result')).to.equal('ok');
      });
    });

    it('should reply OK after validating the answer', () => {
      // When
      const promise = QmailController.validate({ payload: emailSample }, replyStub);

      // Then
      return promise.then(() => {
        sinon.assert.callOrder(
          AnswerRepository.findByChallengeAndAssessment,
          answer.save,
          replyStub
        );
      });
    });

    describe('when analysing goes wrong', () => {

      let boomBadImplementationStub;
      const jsonAPIError = { error: 'Expected API Return ' };

      beforeEach(() => {
        boomBadImplementationStub = sinon.stub(Boom, 'badImplementation').returns(jsonAPIError);
      });

      afterEach(() => {
        boomBadImplementationStub.restore();
      });

      it('should return INTERNAL_ERROR when finding the answer is failing', () => {
        // Given
        const error = new Error();
        AnswerRepository.findByChallengeAndAssessment.rejects(error);

        // When
        const promise = QmailController.validate({ payload: emailSample }, replyStub);

        // Then
        return promise.then(() => {
          sinon.assert.calledOnce(boomBadImplementationStub);
          sinon.assert.calledWith(boomBadImplementationStub, error);
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(replyStub, jsonAPIError);
        });
      });

      it('should return INTERNAL_ERROR when saving is failing', () => {
        // Given
        const error = new Error();
        answer.save.rejects(error);

        // When
        const promise = QmailController.validate({ payload: emailSample }, replyStub);

        // Then
        return promise.then(() => {
          sinon.assert.calledOnce(boomBadImplementationStub);
          sinon.assert.calledWith(boomBadImplementationStub, error);
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(replyStub, jsonAPIError);
        });
      });
    });

  });
});
