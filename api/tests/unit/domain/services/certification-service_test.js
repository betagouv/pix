const { describe, it, expect, sinon} = require('../../../test-helper');
const certificationService = require('../../../../lib/domain/services/certification-service');
const Answer = require('../../../../lib/domain/models/data/answer');
const CertificationChallenge = require('../../../../lib/domain/models/data/certification-challenge');
const certificationCourseRepository = require('../../../../lib/infrastructure/repositories/certification-course-repository');
const userService = require('../../../../lib/domain/services/user-service');
const certificationChallengesService = require('../../../../lib/domain/services/certification-challenges-service');
const Competence = require('../../../../lib/domain/models/referential/competence');
const { UserNotAuthorizedToCertifyError } = require('../../../../lib/domain/errors');

function _buildAnswer(challengeId, result) {
  return new Answer({ id: 'answer_id', challengeId, result });
}

function _buildCertificationChallenge(challengeId, competenceId) {
  return new CertificationChallenge({ challengeId, competenceId });
}

function _buildCompetence(name, index, courseId, pixScore, estimatedLevel) {
  const competence = new Competence();
  competence.id = courseId;
  competence.pixScore = pixScore;
  competence.estimatedLevel = estimatedLevel;
  competence.name = name;
  competence.index = index;
  return competence;
}

const challenges = [
  _buildCertificationChallenge('challenge_A_for_competence_1','competence_1'),
  _buildCertificationChallenge('challenge_B_for_competence_1','competence_1'),
  _buildCertificationChallenge('challenge_C_for_competence_1','competence_1'),
  _buildCertificationChallenge('challenge_D_for_competence_2','competence_2'),
  _buildCertificationChallenge('challenge_E_for_competence_2','competence_2'),
  _buildCertificationChallenge('challenge_F_for_competence_2','competence_2'),
  _buildCertificationChallenge('challenge_G_for_competence_3','competence_3'),
  _buildCertificationChallenge('challenge_H_for_competence_3','competence_3'),
  _buildCertificationChallenge('challenge_I_for_competence_3','competence_3'),
  _buildCertificationChallenge('challenge_J_for_competence_4','competence_4'),
  _buildCertificationChallenge('challenge_K_for_competence_4','competence_4'),
  _buildCertificationChallenge('challenge_L_for_competence_4','competence_4'),
];

function _buildCorrectAnswersForAllChallenges() {
  return [
    _buildAnswer('challenge_A_for_competence_1','ok'),
    _buildAnswer('challenge_B_for_competence_1','ok'),
    _buildAnswer('challenge_C_for_competence_1','ok'),
    _buildAnswer('challenge_D_for_competence_2','ok'),
    _buildAnswer('challenge_E_for_competence_2','ok'),
    _buildAnswer('challenge_F_for_competence_2','ok'),
    _buildAnswer('challenge_G_for_competence_3','ok'),
    _buildAnswer('challenge_H_for_competence_3','ok'),
    _buildAnswer('challenge_I_for_competence_3','ok'),
    _buildAnswer('challenge_J_for_competence_4','ok'),
    _buildAnswer('challenge_K_for_competence_4','ok'),
    _buildAnswer('challenge_L_for_competence_4','ok'),
  ];
}

function _buildWrongAnswersForAllChallenges() {
  return [
    _buildAnswer('challenge_A_for_competence_1','ko'),
    _buildAnswer('challenge_B_for_competence_1','ko'),
    _buildAnswer('challenge_C_for_competence_1','ko'),
    _buildAnswer('challenge_D_for_competence_2','ko'),
    _buildAnswer('challenge_E_for_competence_2','ko'),
    _buildAnswer('challenge_F_for_competence_2','ko'),
    _buildAnswer('challenge_G_for_competence_3','ko'),
    _buildAnswer('challenge_H_for_competence_3','ko'),
    _buildAnswer('challenge_I_for_competence_3','ko'),
    _buildAnswer('challenge_J_for_competence_4','ko'),
    _buildAnswer('challenge_K_for_competence_4','ko'),
    _buildAnswer('challenge_L_for_competence_4','ko'),
  ];
}

function _buildAnswersToHaveOnlyTheLastCompetenceFailed() {
  return [
    _buildAnswer('challenge_A_for_competence_1','ok'),
    _buildAnswer('challenge_B_for_competence_1','ok'),
    _buildAnswer('challenge_C_for_competence_1','ok'),
    _buildAnswer('challenge_D_for_competence_2','ok'),
    _buildAnswer('challenge_E_for_competence_2','ok'),
    _buildAnswer('challenge_F_for_competence_2','ok'),
    _buildAnswer('challenge_G_for_competence_3','ok'),
    _buildAnswer('challenge_H_for_competence_3','ok'),
    _buildAnswer('challenge_I_for_competence_3','ok'),
    _buildAnswer('challenge_J_for_competence_4','ko'),
    _buildAnswer('challenge_K_for_competence_4','ko'),
    _buildAnswer('challenge_L_for_competence_4','ko'),
  ];
}

function _buildAnswersToHaveAThirdOfTheCompetencesFailedAndReproductibilityRateLessThan80() {
  return [
    _buildAnswer('challenge_A_for_competence_1','ok'),
    _buildAnswer('challenge_B_for_competence_1','ko'),
    _buildAnswer('challenge_C_for_competence_1','ok'),
    _buildAnswer('challenge_D_for_competence_2','ok'),
    _buildAnswer('challenge_E_for_competence_2','ok'),
    _buildAnswer('challenge_F_for_competence_2','ok'),
    _buildAnswer('challenge_G_for_competence_3','ok'),
    _buildAnswer('challenge_H_for_competence_3','ko'),
    _buildAnswer('challenge_I_for_competence_3','ko'),
    _buildAnswer('challenge_J_for_competence_4','ok'),
    _buildAnswer('challenge_K_for_competence_4','ko'),
    _buildAnswer('challenge_L_for_competence_4','ok'),
  ];
}

const pixForCompetence1 = 10;
const pixForCompetence2 = 20;
const pixForCompetence3 = 30;
const pixForCompetence4 = 40;
const totalPix = pixForCompetence1 + pixForCompetence2 + pixForCompetence3 + pixForCompetence4;

const competences = [
  _buildCompetence('Mener une recherche', '1.1', 'competence_1', pixForCompetence1, 1),
  _buildCompetence('Partager','2.2', 'competence_2', pixForCompetence2, 2),
  _buildCompetence('Adapter','3.3', 'competence_3', pixForCompetence3, 3),
  _buildCompetence('Résoudre','4.4', 'competence_4', pixForCompetence4, 4),
];

describe('Unit | Service | Certification Service', function() {

  describe('#getResult', () => {

    context('when reproductibility rate is < 50%', () => {

      it('should return totalScore = 0', () => {
        // given
        const answers = _buildWrongAnswersForAllChallenges();

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.totalScore).to.equal(0);
      });

      it('should return list of competences with all certifiedLevel at -1', () => {
        // given
        const answers = _buildWrongAnswersForAllChallenges();
        const expectedCertifiedCompetences = [{
          index: '1.1',
          id: 'competence_1',
          name: 'Mener une recherche',
          level: -1
        }, {
          index: '2.2',
          id: 'competence_2',
          name: 'Partager',
          level: -1
        }, {
          index: '3.3',
          id: 'competence_3',
          name: 'Adapter',
          level: -1
        }, {
          index: '4.4',
          id: 'competence_4',
          name: 'Résoudre',
          level: -1 } ];

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });

    });

    context('when reproductibility rate is between 80% and 100%', () => {

      it('should return totalScore = all pix', () => {
        // given
        const answers = _buildCorrectAnswersForAllChallenges();

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.totalScore).to.equal(totalPix);
      });

      it('should return list of competences with all certifiedLevel equal to estimatedLevel', () => {
        // given
        const answers = _buildCorrectAnswersForAllChallenges();
        const expectedCertifiedCompetences = [{
          index: '1.1',
          id: 'competence_1',
          name: 'Mener une recherche',
          level: 1
        }, {
          index: '2.2',
          id: 'competence_2',
          name: 'Partager',
          level: 2
        }, {
          index: '3.3',
          id: 'competence_3',
          name: 'Adapter',
          level: 3
        }, {
          index: '4.4',
          id: 'competence_4',
          name: 'Résoudre',
          level: 4 } ];

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });

      it('should return totalScore = (all pix - one competence pix) when one competence is totally false', () => {
        // given
        const answers = _buildAnswersToHaveOnlyTheLastCompetenceFailed();

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.totalScore).to.equal(totalPix - pixForCompetence4);
      });

      it('should return list of competences with certifiedLevel = estimatedLevel except for failed competence', () => {
        // given
        const answers = _buildAnswersToHaveOnlyTheLastCompetenceFailed();
        const expectedCertifiedCompetences = [{
          index: '1.1',
          id: 'competence_1',
          name: 'Mener une recherche',
          level: 1
        }, {
          index: '2.2',
          id: 'competence_2',
          name: 'Partager',
          level: 2
        }, {
          index: '3.3',
          id: 'competence_3',
          name: 'Adapter',
          level: 3
        }, {
          index: '4.4',
          id: 'competence_4',
          name: 'Résoudre',
          level: -1 } ];

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });
    });

    context('when reproductibility rate is between 50% and 80%', () => {

      it('should return totalScore = all pix minus 8 for one competence with 1 error and minus all pix for others false competences', () => {
        // given
        const answers = _buildAnswersToHaveAThirdOfTheCompetencesFailedAndReproductibilityRateLessThan80();
        const malusForFalseAnswer = 8;
        const expectedScore = totalPix - pixForCompetence3 - 2*malusForFalseAnswer;

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.totalScore).to.equal(expectedScore);
      });

      it('should return list of competences with certifiedLevel less or equal to estimatedLevel', () => {
        // given
        const answers = _buildAnswersToHaveAThirdOfTheCompetencesFailedAndReproductibilityRateLessThan80();
        const expectedCertifiedCompetences = [{
          index: '1.1',
          id: 'competence_1',
          name: 'Mener une recherche',
          level: 0
        }, {
          index: '2.2',
          id: 'competence_2',
          name: 'Partager',
          level: 2
        }, {
          index: '3.3',
          id: 'competence_3',
          name: 'Adapter',
          level: -1
        }, {
          index: '4.4',
          id: 'competence_4',
          name: 'Résoudre',
          level: 3 } ];

        // when
        const result = certificationService.getResult(answers, challenges, competences);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });

    });
  });

  describe('#startNewCertification', () => {

    let clock;
    let sandbox;

    const certificationCourse = { id: 'newlyCreatedCertificationCourse' };
    const certificationCourseWithNbOfChallenges = { id: 'certificationCourseWithChallenges', nbChallenges: 3 };

    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date('2018-02-04T01:00:00.000+01:00'));
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      clock.restore();
      sandbox.restore();
    });

    const noCompetences = [];
    const oneCompetenceWithLevel0 = [ { id: 'competence1', estimatedLevel: 0 } ];
    const oneCompetenceWithLevel5 = [ { id: 'competence1', estimatedLevel: 5 } ];
    const fiveCompetencesAndOneWithLevel0 = [
      { id: 'competence1', estimatedLevel: 1 },
      { id: 'competence2', estimatedLevel: 2 },
      { id: 'competence3', estimatedLevel: 0 },
      { id: 'competence4', estimatedLevel: 4 },
      { id: 'competence5', estimatedLevel: 5 }
    ];
    const fiveCompetencesWithLevelHigherThan0 = [
      { id: 'competence1', estimatedLevel: 1 },
      { id: 'competence2', estimatedLevel: 0 },
      { id: 'competence3', estimatedLevel: 3 },
      { id: 'competence4', estimatedLevel: 4 },
      { id: 'competence5', estimatedLevel: 5 },
      { id: 'competence5', estimatedLevel: 6 }
    ];

    [ { label: 'User Has No Competence', competences: noCompetences },
      { label: 'User Has Only 1 Competence at Level 0', competences: oneCompetenceWithLevel0 },
      { label: 'User Has Only 1 Competence at Level 5', competences: oneCompetenceWithLevel5 },
      { label: 'User Has 5 Competences with 1 at Level 0', competences: fiveCompetencesAndOneWithLevel0 }
    ].forEach(function(testCase) {
      it(`should not create a new certification if ${testCase.label}`, function() {
        // given
        const userId = 12345;
        sandbox.stub(userService, 'getProfileToCertify').resolves(testCase.competences);

        // when
        const createNewCertificationPromise = certificationService.startNewCertification(userId);

        // then
        return createNewCertificationPromise.catch((error) => {
          expect(error).to.be.an.instanceOf(UserNotAuthorizedToCertifyError);
        });
      });
    });

    it('should create the certification course with status "started", if at least 5 competences with level higher than 0', function() {
      // given
      const userId = 12345;
      sandbox.stub(certificationCourseRepository, 'save').resolves(certificationCourse);
      sandbox.stub(userService, 'getProfileToCertify').resolves(fiveCompetencesWithLevelHigherThan0);
      sandbox.stub(certificationChallengesService, 'saveChallenges').resolves(certificationCourseWithNbOfChallenges);

      // when
      const promise = certificationService.startNewCertification(userId);

      // then
      return promise.then((newCertification) => {
        sinon.assert.calledOnce(certificationCourseRepository.save);
        sinon.assert.calledWith(certificationCourseRepository.save, { userId: userId, status: 'started' });
        expect(newCertification.id).to.equal('certificationCourseWithChallenges');
      });
    });

    it('should create the challenges for the certification course, based on the user profile', function() {
      // given
      const userId = 12345;
      sandbox.stub(certificationCourseRepository, 'save').resolves(certificationCourse);
      sandbox.stub(userService, 'getProfileToCertify').resolves(fiveCompetencesWithLevelHigherThan0);
      sandbox.stub(certificationChallengesService, 'saveChallenges').resolves(certificationCourseWithNbOfChallenges);

      // when
      const promise = certificationService.startNewCertification(userId);

      // then
      return promise.then((newCertification) => {
        sinon.assert.calledWith(userService.getProfileToCertify, userId, '2018-02-04T00:00:00.000Z');
        sinon.assert.calledOnce(certificationChallengesService.saveChallenges);
        sinon.assert.calledWith(certificationChallengesService.saveChallenges, fiveCompetencesWithLevelHigherThan0, certificationCourse);
        expect(newCertification.nbChallenges).to.equal(3);
      });
    });

  });
});
