const {describe, it, beforeEach, afterEach, sinon} = require('../../../test-helper');
const Boom = require('boom');

const assessmentController = require('../../../../lib/application/assessments/assessment-controller');
const assessmentService = require('../../../../lib/domain/services/assessment-service');
const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');

const Assessment = require('../../../../lib/domain/models/data/assessment');

describe('Unit | Controller | assessment-controller', () => {

  describe('#getNextChallenge', () => {

    let assessmentRepositoryGetStub;
    let getAssessmentNextChallengeIdStub;
    let getScoredAssessmentStub;
    let assessmentWithScore;
    let saveAssessmentStub;

    beforeEach(() => {

      assessmentWithScore = new Assessment({
        id: 1,
        courseId: 'recHzEA6lN4PEs7LG', userId: 5,
        estimatedLevel: 0,
        pixScore: 0
      });

      saveAssessmentStub = sinon.stub(assessmentWithScore, 'save');
      getScoredAssessmentStub = sinon.stub(assessmentService, 'getScoredAssessment').resolves(assessmentWithScore);
      assessmentRepositoryGetStub = sinon.stub(assessmentRepository, 'get').resolves({});
      getAssessmentNextChallengeIdStub = sinon.stub(assessmentService, 'getAssessmentNextChallengeId');
    });

    afterEach(() => {
      saveAssessmentStub.restore();
      getScoredAssessmentStub.restore();
      assessmentRepositoryGetStub.restore();
      getAssessmentNextChallengeIdStub.restore();
      assessmentRepositoryGetStub.restore();
    });

    describe('when the assessment is over', () => {

      beforeEach(() => {
        getAssessmentNextChallengeIdStub.resolves(null);
      });

      it('should call getScoredAssessment', () => {
        // When
        const promise = assessmentController.getNextChallenge({params: {id: 7531}}, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.calledWith(getScoredAssessmentStub, 7531);
        });
      });

      it('should save the assessment with score', () => {
        // When
        const promise = assessmentController.getNextChallenge({params: {id: 7531}}, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.called(saveAssessmentStub);
        });
      });

      describe('when saving level and score is failing', () => {

        let badImplementationSpy;
        let replyStub;

        beforeEach(() => {
          badImplementationSpy = sinon.stub(Boom, 'badImplementation').returns({});
          replyStub = sinon.stub();
        });

        afterEach(() => {
          badImplementationSpy.restore();
        });

        it('should return a badImplementation error when evaluating is an error', () => {
          // Given
          let error = new Error('Unable to evaluate level');
          getScoredAssessmentStub.rejects(error);


          // When
          const promise = assessmentController.getNextChallenge({params: {id: 7531}}, replyStub);

          // Then
          return promise.then(() => {
            sinon.assert.calledWith(badImplementationSpy, error);
            sinon.assert.calledWith(replyStub, Boom.badImplementation(error));
          });
        });

        it('should', () => {
          // Given
          const error = new Error('Unable to save assessment');
          saveAssessmentStub.rejects(error);

          // When
          const promise = assessmentController.getNextChallenge({params: {id: 7531}}, replyStub);

          // Then
          return promise.then(() => {
            sinon.assert.calledWith(badImplementationSpy, error);
            sinon.assert.calledWith(replyStub, Boom.badImplementation(error));
          });

        });

      });

    });

    describe('when the assessment is not over yet', () => {

      beforeEach(() => {
        getAssessmentNextChallengeIdStub.resolves({});
      });

      it('should not evaluate assessment score', () => {
        // When
        const promise = assessmentController.getNextChallenge({params: {id: 7531}}, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.notCalled(getScoredAssessmentStub);
        });
      });

    });

  });

});
