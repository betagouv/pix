const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/assessment-service');
const assessmentAdapter = require('../../../../lib/infrastructure/adapters/assessment-adapter');

const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const certificationChallengeRepository = require('../../../../lib/infrastructure/repositories/certification-challenge-repository');
const courseRepository = require('../../../../lib/infrastructure/repositories/course-repository');
const challengeRepository = require('../../../../lib/infrastructure/repositories/challenge-repository');
const answerRepository = require('../../../../lib/infrastructure/repositories/answer-repository');
const skillRepository = require('../../../../lib/infrastructure/repositories/skill-repository');

const Assessment = require('../../../../lib/domain/models/data/assessment');
const Challenge = require('../../../../lib/domain/models/Challenge');
const CertificationChallenge = require('../../../../lib/domain/models/CertificationChallenge');

const Answer = require('../../../../lib/domain/models/data/answer');
const Skill = require('../../../../lib/cat/skill');

const { NotElligibleToScoringError } = require('../../../../lib/domain/errors');

function _buildChallenge(challengeId, knowledgeTags) {
  const challenge = new Challenge();
  challenge.id = challengeId;
  challenge.skills = knowledgeTags;
  return challenge;
}

function _buildAssessmentForCourse(courseId, assessmentId = 'assessment_id') {
  const assessment = new Assessment({ id: assessmentId });
  if (courseId) {
    assessment.set('courseId', courseId);
  }
  return assessment;
}

function _buildAnswer(challengeId, result, assessmentId = 1) {
  const answer = new Answer({ id: 'answer_id' });
  answer.set('challengeId', challengeId);
  answer.set('assessmentId', assessmentId);
  answer.set('result', result);
  return answer;
}

describe('Unit | Domain | Services | assessment-service', function() {

  describe('#getAssessmentNextChallengeId', function() {

    it('Should return the first challenge if no currentChallengeId is given', () => {

      sinon.stub(courseRepository, 'get').resolves({ challenges: ['the_first_challenge'] });

      return service.getAssessmentNextChallengeId(_buildAssessmentForCourse('22'), null).then(function(result) {
        expect(result).to.equal('the_first_challenge');
        courseRepository.get.restore();
      });

    });

    it('Should return the next challenge if currentChallengeId is given', () => {

      sinon.stub(courseRepository, 'get').resolves({ challenges: ['1st_challenge', '2nd_challenge'] });

      return service.getAssessmentNextChallengeId(_buildAssessmentForCourse('22'), '1st_challenge').then(function(result) {
        expect(result).to.equal('2nd_challenge');
        courseRepository.get.restore();
      });

    });

    it('Should resolves to "null" if no assessment is given', () => {

      return service.getAssessmentNextChallengeId().then((result) => {
        expect(result).to.equal(null);
      });
    });

    it('Should resolves to "null" if no courseId is given', () => {

      sinon.stub(courseRepository, 'get').resolves({ challenges: ['1st_challenge', '2nd_challenge'] });

      return service.getAssessmentNextChallengeId(_buildAssessmentForCourse(), '1st_challenge').then(function(result) {
        expect(result).to.equal(null);
        courseRepository.get.restore();
      });

    });

    it('Should resolves to "null" if courseId starts with "null"', () => {

      sinon.stub(courseRepository, 'get').resolves({ challenges: ['1st_challenge', '2nd_challenge'] });

      return service.getAssessmentNextChallengeId(_buildAssessmentForCourse('null22'), '1st_challenge').then(function(result) {
        expect(result).to.equal(null);
        courseRepository.get.restore();
      });

    });

  });

  describe('#getScoredAssessment', () => {

    it('checks sanity', () => {
      expect(service.getScoredAssessment).to.exist;
    });

    let getAssessmentStub;
    let getCourseStub;
    let getChallengesStub;
    let findByAssessmentStub;
    let getSkillStub;

    const COURSE_ID = 123;
    const ASSESSMENT_ID = 836;
    const assessment = _buildAssessmentForCourse(COURSE_ID, ASSESSMENT_ID);

    const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok', ASSESSMENT_ID);
    const partialAnswerWeb1 = _buildAnswer('challenge_web_1', 'partial', ASSESSMENT_ID);

    const challenges = [
      _buildChallenge('challenge_web_1', ['@web1']),
      _buildChallenge('challenge_web_2', ['@web2'])
    ];

    beforeEach(() => {
      getAssessmentStub = sinon.stub(assessmentRepository, 'get').returns(Promise.resolve(assessment));
      getCourseStub = sinon.stub(courseRepository, 'get').returns({
        challenges: ['challenge_web_2', 'challenge_web_1'],
        competences: ['competence_id']
      });
      getChallengesStub = sinon.stub(challengeRepository, 'getFromCompetenceId').returns(challenges);
      getSkillStub = sinon.stub(skillRepository.cache, 'getFromCompetenceId').returns(new Set());
      sinon.stub(assessmentAdapter, 'getAdaptedAssessment');

      findByAssessmentStub = sinon.stub(answerRepository, 'findByAssessment')
        .returns(Promise.resolve([correctAnswerWeb2, partialAnswerWeb1]));
    });

    afterEach(() => {
      getAssessmentStub.restore();
      getCourseStub.restore();
      getChallengesStub.restore();
      getSkillStub.restore();
      findByAssessmentStub.restore();
      assessmentAdapter.getAdaptedAssessment.restore();
    });

    it('should retrieve assessment from repository', () => {
      // When
      const promise = service.getScoredAssessment(ASSESSMENT_ID);

      // Then
      return promise.then(() => {
        sinon.assert.calledWithExactly(getAssessmentStub, ASSESSMENT_ID);
      });
    });

    it('should return a rejected promise when something fails in the repository', () => {
      // Given
      const errorOnRepository = new Error();
      getAssessmentStub.returns(Promise.reject(errorOnRepository));

      // When
      const promise = service.getScoredAssessment(ASSESSMENT_ID);

      // Then
      return promise.then(() => {
        sinon.assert.fail('Should not succeed');
      }, (error) => {
        expect(error).to.equal(errorOnRepository);
      });

    });

    it('should return a rejected promise when the assessment does not exist', () => {
      // Given
      getAssessmentStub.returns(Promise.resolve(null));

      // When
      const promise = service.getScoredAssessment(ASSESSMENT_ID);

      // Then
      return promise.then(() => {
        sinon.assert.fail('Should not succeed');
      }, (error) => {
        expect(error.message).to.equal(`Unable to find assessment with ID ${ASSESSMENT_ID}`);
      });
    });

    it('should detect Assessment created for preview Challenge and do not evaluate score', () => {
      // Given
      const assessmentFromPreview = new Assessment({
        id: '1',
        courseId: 'nullfec89bd5-a706-419b-a6d2-f8805e708ace'
      });
      getAssessmentStub.returns(Promise.resolve(assessmentFromPreview));

      // When
      const promise = service.getScoredAssessment(ASSESSMENT_ID);

      // Then
      return promise
        .then(() => {
          sinon.assert.fail('Should not succeed');
        })
        .catch((err) => {
          sinon.assert.notCalled(findByAssessmentStub);
          expect(err).to.be.an.instanceof(NotElligibleToScoringError);
          expect(err.message).to.equal(`Assessment with ID ${ASSESSMENT_ID} is a preview Challenge`);
        });
    });

    describe('when we retrieved the assessment', () => {

      beforeEach(() => {
        getAssessmentStub.returns(Promise.resolve(assessment));
      });

      it('should return a rejected promise when the repository is on error', () => {
        // Given
        getCourseStub.returns(Promise.reject(new Error('Error from courseRepository')));

        // When
        const promise = service.getScoredAssessment(ASSESSMENT_ID);

        // Then
        return promise.then(() => {
          sinon.assert.fail('Should not succeed');
        })
          .catch((error) => {
            sinon.assert.calledWithExactly(getCourseStub, COURSE_ID);
            expect(error.message).to.equal('Error from courseRepository');
          });
      });

      it('should load answers for the assessment', () => {
        // When
        const promise = service.getScoredAssessment(ASSESSMENT_ID);

        // Then
        return promise
          .then(() => {
            sinon.assert.calledOnce(findByAssessmentStub);
            sinon.assert.calledWithExactly(findByAssessmentStub, ASSESSMENT_ID);
          });
      });

      describe('when we retrieved every challenge', () => {

        let firstFakeChallenge;
        let secondFakeChallenge;

        beforeEach(() => {
          const course = { challenges: ['challenge_web_1', 'challenge_web_2'], competences: ['competence_id'] };
          getCourseStub.returns(Promise.resolve(course));

          firstFakeChallenge = _buildChallenge(['@web1']);
          secondFakeChallenge = _buildChallenge(['@web2']);

          getChallengesStub.resolves([firstFakeChallenge, secondFakeChallenge]);
        });

        it('should resolve the promise with a scored assessment', () => {
          // When
          const promise = service.getScoredAssessment(ASSESSMENT_ID);

          // Then
          return promise
            .then(({ assessmentPix, skills }) => {
              expect(assessmentPix.get('id')).to.equal(ASSESSMENT_ID);
              expect(assessmentPix.get('courseId')).to.deep.equal(COURSE_ID);
              expect(assessmentPix.get('estimatedLevel')).to.equal(0);
              expect(assessmentPix.get('pixScore')).to.equal(0);
              expect(assessmentPix.get('successRate')).to.equal(50);
              expect(skills).to.be.undefined;
            });
        });

        it('should resolve the promise with a scored assessment and a skills', () => {
          // given
          const course = {
            challenges: ['challenge_web_1', 'challenge_web_2'],
            competences: ['competence_id'],
            isAdaptive: true
          };
          getCourseStub.returns(Promise.resolve(course));
          const expectedValitedSkills = _generateValidatedSkills();
          const expectedFailedSkills = _generateFailedSkills();

          assessmentAdapter.getAdaptedAssessment.returns({
            validatedSkills: _generateValidatedSkills(),
            failedSkills: _generateFailedSkills(),
            obtainedLevel: 50,
            displayedPixScore: 13
          });

          // When
          const promise = service.getScoredAssessment(ASSESSMENT_ID);

          // Then
          return promise
            .then(({ assessmentPix, skills }) => {
              expect(assessmentPix.get('id')).to.equal(ASSESSMENT_ID);
              expect(assessmentPix.get('courseId')).to.deep.equal(COURSE_ID);
              expect(assessmentPix.get('estimatedLevel')).to.equal(50);
              expect(assessmentPix.get('pixScore')).to.equal(13);
              expect(skills.assessmentId).to.equal(ASSESSMENT_ID);
              expect([...skills.validatedSkills]).to.deep.equal([...expectedValitedSkills]);
              expect([...skills.failedSkills]).to.deep.equal([...expectedFailedSkills]);
            });
        });

      });
    });
  });

  describe('#createCertificationAssessmentForUser', () => {
    beforeEach(() => {
      sinon.stub(assessmentRepository, 'save').resolves();
    });
    afterEach(() => {
      assessmentRepository.save.restore();
    });
    it('should save an assessment with CERTIFICATION type', () => {
      // given
      const certificationCourse = { id: 'certificationId' };
      const userId = 'userId';
      const expectedAssessment = {
        courseId: certificationCourse.id,
        type: 'CERTIFICATION',
        userId: userId
      };
      // when

      const promise = service.createCertificationAssessmentForUser(certificationCourse, userId);
      // then
      return promise.then(() => {
        sinon.assert.calledOnce(assessmentRepository.save);
        sinon.assert.calledWith(assessmentRepository.save, expectedAssessment);
      });
    });
  });

  describe('#isCertificationAssessment', () => {

    context('if assessment type is \'CERTIFICATION\'', () => {
      it('should return true', () => {
        // given
        const assessment = new Assessment({ type: 'CERTIFICATION' });

        // when
        const result = service.isCertificationAssessment(assessment);

        // then
        expect(result).to.be.true;
      });
    });

    context('if assessment type is different of \'CERTIFICATION\'', () => {
      it('should return false', () => {
        // given
        const assessment = new Assessment({ type: 'BRANDONE EST FORMIDABLE' });

        // when
        const result = service.isCertificationAssessment(assessment);

        // then
        expect(result).to.be.false;
      });
    });
  });

  describe('#getNextChallengeForCertificationCourse', () => {

    let sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create()
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return a challenge which was not answered (challenge with no associated answer)', function() {
      // given
      const assessment = new Assessment({ id: 'assessmentId', courseId: 'certifCourseId' });
      const challenge = new CertificationChallenge({ id: '1', challengeId : 'recA' });
      sandbox.stub(certificationChallengeRepository, 'findNonAnsweredChallengeByCourseId').resolves(challenge);

      // when
      const promise = service.getNextChallengeForCertificationCourse(assessment);

      // then
      return promise.then((nextChallenge) => {
        expect(nextChallenge).to.be.instanceOf(CertificationChallenge);
      });

    });

    it('should return __ when there is no challenges to give anymore', function() {
      // given

      // when

      // then

    });
  });
});

function _generateValidatedSkills() {
  const url2 = new Skill('@url2');
  const web3 = new Skill('@web3');
  const skill = new Set();
  skill.add(url2);
  skill.add(web3);

  return skill;
}

function _generateFailedSkills() {
  const recherche2 = new Skill('@recherch2');
  const securite3 = new Skill('@securite3');
  const skill = new Set();
  skill.add(recherche2);
  skill.add(securite3);

  return skill;
}
