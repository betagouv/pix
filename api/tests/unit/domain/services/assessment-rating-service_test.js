const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/assessment-rating-service');
const assessmentService = require('../../../../lib/domain/services/assessment-service');
const skillsService = require('../../../../lib/domain/services/skills-service');

const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const courseRepository = require('../../../../lib/infrastructure/repositories/course-repository');
const competenceRepository = require('../../../../lib/infrastructure/repositories/competence-repository');
const markRepository = require('../../../../lib/infrastructure/repositories/mark-repository');

const Assessment = require('../../../../lib/domain/models/Assessment');
const Area = require('../../../../lib/domain/models/Area');
const Competence = require('../../../../lib/domain/models/referential/competence');
const Mark = require('../../../../lib/domain/models/Mark');
const AirtableCourse = require('../../../../lib/domain/models/referential/course');
const Skill = require('../../../../lib/cat/skill');

const { NotFoundError } = require('../../../../lib/domain/errors');

describe('Unit | Domain | Services | assessment-rating', () => {

  describe('#evaluateFromAssessmentId', () => {

    const assessmentId = 1;
    const assessmentCourseId = 'recHzEA6lN4PEs7LG';
    const competenceId = 'competenceId';

    let evaluatedSkills;
    let course;
    let competence;
    let assessmentWithScore;
    let scoredAsssessment;
    let sandbox;

    beforeEach(() => {

      evaluatedSkills = {
        assessmentId: assessmentId,
        validatedSkills: _generateValitedSkills(),
        failedSkills: _generateFailedSkills()
      };

      assessmentWithScore = new Assessment({
        id: assessmentId,
        courseId: assessmentCourseId,
        userId: 5,
        estimatedLevel: 2,
        pixScore: 13,
      });

      scoredAsssessment = {
        assessmentPix: assessmentWithScore,
        skills: evaluatedSkills
      };

      competence = new Competence();
      competence.id = competenceId;
      competence.name = 'Mener une recherche et une veille d’information';
      competence.index = '1.1';
      competence.areaId = ['recdmN2Exvq2oAPap'];
      competence.courseId = 'recvNIWtjJRyBCd0P';
      competence.reference = '1.1 Mener une recherche et une veille d’information';
      competence.skills = undefined;
      competence.area = new Area({ id: 'recdmN2Exvq2oAPap', code: '1', title: 'Information et données' });

      course = new AirtableCourse();
      course.id = assessmentCourseId;
      course.name = 'Mener une recherche';
      course.competences = [competenceId];

      sandbox = sinon.sandbox.create();

      sandbox.stub(assessmentService, 'fetchAssessment').resolves(scoredAsssessment);
      sandbox.stub(assessmentRepository, 'save').resolves();
      sandbox.stub(skillsService, 'saveAssessmentSkills').resolves();
      sandbox.stub(courseRepository, 'get').resolves(course);
      sandbox.stub(competenceRepository, 'get').resolves(competence);
      sandbox.stub(markRepository, 'save').resolves();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should retrieve assessment informations', () => {
      // when
      service.evaluateFromAssessmentId(assessmentId);

      // then
      expect(assessmentService.fetchAssessment).to.have.been.calledWith(assessmentId);
    });

    it('should reject a not found error when the placement does not exists', () => {
      // given
      assessmentService.fetchAssessment.rejects(new NotFoundError());

      // when
      const promise = service.evaluateFromAssessmentId(assessmentId);

      // then
      return expect(promise).to.have.been.rejectedWith(NotFoundError);
    });

    it('should save the assessment score', () => {
      // when
      const promise = service.evaluateFromAssessmentId(assessmentId);

      // then
      return promise.then(() => {
        expect(assessmentRepository.save).to.have.been.calledWith(assessmentWithScore);
      });
    });

    it('should save the evaluated skills', () => {
      // when
      const promise = service.evaluateFromAssessmentId(assessmentId);

      // then
      return promise.then(() => {
        expect(skillsService.saveAssessmentSkills).to.have.been.calledWith(evaluatedSkills);
      });
    });

    context('when the assessment is a PLACEMENT', () => {

      it('should retrieve the course', () => {
        // when
        const promise = service.evaluateFromAssessmentId(assessmentId);

        // then
        return promise.then(() => {
          expect(courseRepository.get).to.have.been.calledWith(assessmentCourseId);
        });
      });

      it('should load the competence details', () => {
        // when
        const promise = service.evaluateFromAssessmentId(assessmentId);

        // then
        return promise.then(() => {
          expect(competenceRepository.get).to.have.been.calledWith(competenceId);
        });
      });

      it('should save the evaluated competence', () => {
        // when
        const promise = service.evaluateFromAssessmentId(assessmentId);

        // then
        return promise.then(() => {
          expect(markRepository.save).to.have.been.called;

          const savedMark = markRepository.save.firstCall.args;
          expect(savedMark[0]).to.deep.equal(new Mark({
            estimatedLevel: 2,
            score: 13,
            area_code: '1',
            competence_code: '1.1',
            assessmentId: assessmentId
          }));
        });
      });

      it('should not try to evaluate as a certification', () => {
        // when
        const promise = service.evaluateFromAssessmentId(assessmentId);

        // then
        return promise.then(() => {
          expect(certificationService.calculateCertificationResultByAssessmentId).not.to.have.been.calledWith(assessmentId);
        });
      });

      context('when the saving the mark is failing', () => {
        it('should return the error', () => {
          // given
          const error = new Error();
          markRepository.save.rejects(error);

          // when
          const promise = service.evaluateFromAssessmentId(assessmentId);

          // then
          return expect(promise).to.be.rejected;
        });
      });

    });

    context('when the assessment is a PREVIEW', () => {
      it('should try to save the related marks', () => {
        // given
        assessmentWithScore.courseId = 'nullCourseId';
        assessmentWithScore.type = 'PREVIEW';

        // when
        const promise = service.evaluateFromAssessmentId(assessmentId);

        // then
        return promise.then(() => {
          expect(markRepository.save).not.to.have.been.called;
        });
      });
    });

    context('when the assessment is a DEMO', () => {
      it('should try to save the related marks', () => {
        // given
        assessmentWithScore.type = 'DEMO';

        // when
        const promise = service.evaluateFromAssessmentId(assessmentId);

        // then
        return promise.then(() => {
          expect(markRepository.save).not.to.have.been.called;
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
