const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');
const routeSafetyService = require('../../../../lib/domain/services/route-safety-service');
const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const jsonWebToken = require('../../../../lib/infrastructure/validators/jsonwebtoken-verify');

describe.skip('Unit | Service | Route Safety', function() {

  describe('#canUserAccessReadThisAssessment', () => {
    let sandbox;
    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(jsonWebToken, 'verify');
      sandbox.stub(assessmentRepository, 'getByUserIdAndAssessmentId');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      // then
      expect(routeSafetyService.canUserAccessReadThisAssessment).to.be.a('function');
    });

    it('should verify token', () => {
      // given
      const request = {
        headers: { authorization: 'INVALID_TOKEN' }
      };
      const codeStub = sinon.stub().returns({
        takeover: () => {
        }
      });

      const replyStub = sinon.stub().returns({
        code: codeStub
      });
      jsonWebToken.verify.resolves({});

      // when
      const promise = routeSafetyService.canUserAccessReadThisAssessment(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(jsonWebToken.verify);
        sinon.assert.calledWith(jsonWebToken.verify, request.headers.authorization);
      });
    });

    describe('when user id (from token) is linked to assessment', () => {
      it('should pass the hand to handler', () => {
        // given
        const userId = 7;
        jsonWebToken.verify.resolves(userId);
        const fecthedAssessment = {};
        assessmentRepository.getByUserIdAndAssessmentId.resolves(fecthedAssessment);
        const request = {
          headers: { authorization: 'VALID_TOKEN' },
          params: {
            id: 8
          }
        };
        const takeOverSpy = sinon.spy();
        const codeStub = sinon.stub().returns({
          takeover: takeOverSpy
        });

        const replyStub = sinon.stub().returns({
          code: codeStub
        });

        // when
        const promise = routeSafetyService.canUserAccessReadThisAssessment(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledWith(replyStub, fecthedAssessment);
          sinon.assert.notCalled(codeStub);
          sinon.assert.notCalled(takeOverSpy);
        });
      });
    });

    describe('when user id (from token) is not linked to assessment', () => {
      it('should take over the request and response with 401 status code', (done) => {
        // given;
        const userId = 7;
        jsonWebToken.verify.resolves(userId);
        assessmentRepository.getByUserIdAndAssessmentId.rejects();
        const request = {
          headers: { authorization: 'INVALID_TOKEN' },
          params: {
            id: 8
          }
        };
        const codeStub = sinon.stub().returns({
          takeover: () => {
          }
        });

        const replyStub = sinon.stub().returns({
          code: codeStub
        });

        // when
        const promise = routeSafetyService.canUserAccessReadThisAssessment(request, replyStub);

        // then
        promise.then(() => {
          sinon.assert.calledOnce(assessmentRepository.getByUserIdAndAssessmentId);
          sinon.assert.calledWith(assessmentRepository.getByUserIdAndAssessmentId, request.params.id, userId);
          sinon.assert.calledWith(codeStub, 401);
          done();
        });
      });
    });

    describe('when token is not valid', () => {
      it('should response with 401 status code', () => {
        // given
        jsonWebToken.verify.rejects({});
        const request = {
          headers: { authorization: 'INVALID_TOKEN' }
        };

        const takeOverSpy = sinon.spy();
        const codeStub = sinon.stub().returns({
          takeover: takeOverSpy
        });

        const replyStub = sinon.stub().returns({
          code: codeStub
        });

        // when
        const promise = routeSafetyService.canUserAccessReadThisAssessment(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(codeStub);
          sinon.assert.calledWith(codeStub, 401);
          sinon.assert.calledOnce(takeOverSpy);
        });
      });
    });
  });
});
