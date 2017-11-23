const { describe, it, beforeEach, afterEach, sinon, expect } = require('../../../test-helper');
const Boom = require('boom');

const assessmentController = require('../../../../lib/application/assessments/assessment-controller');
const assessmentService = require('../../../../lib/domain/services/assessment-service');
const skillService = require('../../../../lib/domain/services/skills-service');
const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const challengeRepository = require('../../../../lib/infrastructure/repositories/challenge-repository');

const Assessment = require('../../../../lib/domain/models/data/assessment');
const CertificationChallenge = require('../../../../lib/domain/models/CertificationChallenge');
const Skill = require('../../../../lib/cat/skill');

describe('Unit | Controller | assessment-controller', () => {

  describe('#getNextChallenge', () => {

    let sandbox;
    let assessmentWithoutScore;
    let assessmentWithScore;
    let scoredAsssessment;

    const assessmentSkills = {
      assessmentId: 1,
      validatedSkills: _generateValitedSkills(),
      failedSkills: _generateFailedSkills()
    };

    beforeEach(() => {

      assessmentWithoutScore = new Assessment({
        id: 1,
        courseId: 'recHzEA6lN4PEs7LG',
        userId: 5
      });

      assessmentWithScore = new Assessment({
        id: 1,
        courseId: 'recHzEA6lN4PEs7LG', userId: 5,
        estimatedLevel: 0,
        pixScore: 0,
      });

      scoredAsssessment = {
        assessmentPix: assessmentWithScore,
        skills: assessmentSkills
      };

      sandbox = sinon.sandbox.create();

      sandbox.stub(assessmentService, 'getScoredAssessment').resolves(scoredAsssessment);
      sandbox.stub(assessmentWithScore, 'save');
      sandbox.stub(assessmentService, 'getAssessmentNextChallengeId');
      sandbox.stub(skillService, 'saveAssessmentSkills');
    });

    afterEach(() => {

      sandbox.restore();

    });

    describe('when the assessment is a preview', () => {

      beforeEach(() => {
        sandbox.stub(assessmentRepository, 'get').resolves(assessmentWithoutScore);
      });

      it('should reply null', () => {
        // Given
        const replyStub = sinon.stub();
        assessmentWithoutScore.set('courseId', 'null2356871');

        // When
        const promise = assessmentController.getNextChallenge({ params: { id: 12 } }, replyStub);

        // Then
        return promise.then(() => {
          sinon.assert.calledWith(replyStub, 'null');
        });
      });
    });

    describe('when the assessment is over', () => {

      beforeEach(() => {
        assessmentService.getAssessmentNextChallengeId.resolves(null);
        sandbox.stub(assessmentRepository, 'get').resolves(assessmentWithoutScore);
      });

      it('should call getScoredAssessment', () => {
        // When
        const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.calledWith(assessmentService.getScoredAssessment, 7531);
        });
      });

      it('should save the assessment with score', () => {
        // When
        const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.called(assessmentWithScore.save);
        });
      });

      it('should save the skills', () => {
        // When
        assessmentWithScore.save.resolves();
        skillService.saveAssessmentSkills.resolves({});
        const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.calledOnce(skillService.saveAssessmentSkills);
          sinon.assert.calledWith(skillService.saveAssessmentSkills, assessmentSkills);
        });
      });

      it('should reply with no content', () => {
        // Given
        assessmentWithScore.save.resolves();
        skillService.saveAssessmentSkills.resolves({});
        const replyStub = sinon.stub().returns({
          code: () => {
          }
        });

        // When
        const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, replyStub);

        // Then
        return promise.then(() => {
          sinon.assert.calledOnce(replyStub);
          expect(replyStub.getCalls()[0].args).to.deep.equal([]);
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
          const error = new Error('Unable to evaluate level');
          assessmentService.getScoredAssessment.rejects(error);

          // When
          const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, replyStub);

          // Then
          return promise.then(() => {
            sinon.assert.calledWith(badImplementationSpy, error);
            sinon.assert.calledWith(replyStub, Boom.badImplementation(error));
          });
        });

        it('should return an error when database returns an error', () => {
          // Given
          const error = new Error('Unable to save assessment');
          assessmentWithScore.save.rejects(error);

          // When
          const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, replyStub);

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
        assessmentService.getAssessmentNextChallengeId.resolves({});
        sandbox.stub(assessmentRepository, 'get').resolves(assessmentWithoutScore);
      });

      it('should not evaluate assessment score', () => {
        // When
        const promise = assessmentController.getNextChallenge({ params: { id: 7531 } }, () => {
        });

        // Then
        return promise.then(() => {
          sinon.assert.notCalled(assessmentService.getScoredAssessment);
        });
      });

    });

    describe('when the assessment is a certification assessment', function() {

      let certificationAssessment = new Assessment({
        id: 'assessmentId',
        type: 'CERTIFICATION'
      });

      beforeEach(() => {
        sandbox.stub(assessmentRepository, 'get').resolves(certificationAssessment);
      });

      it('should call getNextChallengeForCertificationCourse in assessmentService', function() {
        // given
        const replyStub = () => {
        };
        sandbox.stub(assessmentService, 'isCertificationAssessment').returns(true);
        sandbox.stub(assessmentService, 'getNextChallengeForCertificationCourse').resolves();

        // when
        const promise = assessmentController.getNextChallenge({ params: { id: 12 } }, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(assessmentService.getNextChallengeForCertificationCourse);
          sinon.assert.calledWith(
            assessmentService.getNextChallengeForCertificationCourse,
            certificationAssessment
          );
        });
      });

      it('should provide the correct challengeId to the next layer', function() {
        // given
        const replyStub = () => {
        };
        const challenge = new CertificationChallenge({ challengeId: 'idea' });
        sandbox.stub(assessmentService, 'isCertificationAssessment').returns(true);
        sandbox.stub(assessmentService, 'getNextChallengeForCertificationCourse').resolves(challenge);
        sandbox.stub(challengeRepository, 'get').resolves(false);

        // when
        const promise = assessmentController.getNextChallenge({ params: { id: 12 } }, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledWith(challengeRepository.get, challenge.challengeId);
        });
      });
    });

  });

});

function _generateValitedSkills() {
  const url2 = new Skill('@url2');
  const web3 = new Skill('@web3');
  const skills = new Set();
  skills.add(url2);
  skills.add(web3);

  return skills;
}

function _generateFailedSkills() {
  const recherche2 = new Skill('@recherch2');
  const securite3 = new Skill('@securite3');
  const skill = new Set();
  skill.add(recherche2);
  skill.add(securite3);

  return skill;
}

