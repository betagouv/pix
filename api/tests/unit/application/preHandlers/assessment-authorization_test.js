const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const AssessmentAuhorization = require('../../../../lib/application/preHandlers/assessment-authorization');
const jsonwebtokenUtils = require('../../../../lib/infrastructure/utils/jsonwebtoken-utils');
const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');

describe('Unit | Pre-handler | Assessment Authorization', () => {

  describe('#verify', () => {

    let sandbox;
    let replyStub;
    let codeStub;
    const request = {
      headers: { authorization: 'VALID_TOKEN' },
      params: {
        id: 8
      }
    };

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(jsonwebtokenUtils, 'extractUserId');
      sandbox.stub(assessmentRepository, 'getByUserIdAndAssessmentId');
      codeStub = sandbox.stub();
      replyStub = sandbox.stub().returns({
        code: codeStub
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      // then
      expect(AssessmentAuhorization.verify).to.be.a('function');
    });

    it('should get userId from token', (done) => {
      // given
      jsonwebtokenUtils.extractUserId.returns('userId');
      assessmentRepository.getByUserIdAndAssessmentId.resolves();

      // when
      const promise = AssessmentAuhorization.verify(request, replyStub);

      // then
      promise.then(() => {
        sinon.assert.calledOnce(jsonwebtokenUtils.extractUserId);
        sinon.assert.calledWith(jsonwebtokenUtils.extractUserId, request.headers);
        done();
      });
    });

    describe('When assessment is linked to userId (userId exist)', () => {

      it('should reply with assessment', (done) => {
        // given
        const fetchedAssessment = {};
        const extractedUserId = 'userId';
        jsonwebtokenUtils.extractUserId.returns(extractedUserId);
        assessmentRepository.getByUserIdAndAssessmentId.resolves(fetchedAssessment);

        // when
        const promise = AssessmentAuhorization.verify(request, replyStub);

        // then
        promise.then(() => {
          sinon.assert.calledOnce(assessmentRepository.getByUserIdAndAssessmentId);
          sinon.assert.calledWith(assessmentRepository.getByUserIdAndAssessmentId, request.params.id, extractedUserId);
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(replyStub, fetchedAssessment);
          done();
        });
      });
    });

    describe('When assessment is linked a null userId', () => {

      it('should reply with assessment', (done) => {
        // given
        const fetchedAssessment = {};
        const extractedUserId = null;
        jsonwebtokenUtils.extractUserId.returns(extractedUserId);
        assessmentRepository.getByUserIdAndAssessmentId.resolves(fetchedAssessment);

        // when
        const promise = AssessmentAuhorization.verify(request, replyStub);

        // then
        promise.then(() => {
          sinon.assert.calledOnce(assessmentRepository.getByUserIdAndAssessmentId);
          sinon.assert.calledWith(assessmentRepository.getByUserIdAndAssessmentId, request.params.id, extractedUserId);
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(replyStub, fetchedAssessment);
          done();
        });
      });
    });

    describe('When userId (from token) is not linked to assessment', () => {
      it('should take over the request and response with 401 status code', () => {
        // given
        const extractedUserId = null;
        const takeOverSpy = sinon.spy();
        codeStub.returns({
          takeover: takeOverSpy
        });
        jsonwebtokenUtils.extractUserId.returns(extractedUserId);
        assessmentRepository.getByUserIdAndAssessmentId.rejects();
        // when
        const promise = AssessmentAuhorization.verify(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(codeStub, 401);
          sinon.assert.calledOnce(takeOverSpy);
        });
      });
    });

  });
});
