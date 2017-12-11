const { describe, it, expect } = require('../../../test-helper');
const certificationService = require('../../../../lib/domain/services/certification-service');
const Answer = require('../../../../lib/domain/models/data/answer');
const CertificationChallenge = require('../../../../lib/domain/models/data/certification-challenge');
const Competence = require('../../../../lib/domain/models/referential/competence');

function _buildAnswer(challengeId, result) {
  return new Answer({ id: 'answer_id', challengeId, result });
}

function _buildCertificationChallenge(challengeId, competenceId) {
  return new CertificationChallenge({ challengeId, competenceId });
}

function _buildCompetence(name, courseId, pixScore, estimatedLevel) {
  const competence = new Competence();
  competence.id = courseId;
  competence.pixScore = pixScore;
  competence.estimatedLevel = estimatedLevel;
  competence.name = name;
  return competence;
}

const listChallenges = [
  _buildCertificationChallenge('challenge_1','comp_1'),
  _buildCertificationChallenge('challenge_2','comp_1'),
  _buildCertificationChallenge('challenge_3','comp_1'),
  _buildCertificationChallenge('challenge_4','comp_2'),
  _buildCertificationChallenge('challenge_5','comp_2'),
  _buildCertificationChallenge('challenge_6','comp_2'),
  _buildCertificationChallenge('challenge_7','comp_3'),
  _buildCertificationChallenge('challenge_8','comp_3'),
  _buildCertificationChallenge('challenge_9','comp_3'),
  _buildCertificationChallenge('challenge_10','comp_4'),
  _buildCertificationChallenge('challenge_11','comp_4'),
  _buildCertificationChallenge('challenge_12','comp_4'),
];

function _listAnswersAllCorrectAnswers() {
  return [
    _buildAnswer('challenge_1','ok'),
    _buildAnswer('challenge_2','ok'),
    _buildAnswer('challenge_3','ok'),
    _buildAnswer('challenge_4','ok'),
    _buildAnswer('challenge_5','ok'),
    _buildAnswer('challenge_6','ok'),
    _buildAnswer('challenge_7','ok'),
    _buildAnswer('challenge_8','ok'),
    _buildAnswer('challenge_9','ok'),
    _buildAnswer('challenge_10','ok'),
    _buildAnswer('challenge_11','ok'),
    _buildAnswer('challenge_12','ok'),
  ];
}

function _listAnswersAllFalseAnswers() {
  return [
    _buildAnswer('challenge_1','ko'),
    _buildAnswer('challenge_2','ko'),
    _buildAnswer('challenge_3','ko'),
    _buildAnswer('challenge_4','ko'),
    _buildAnswer('challenge_5','ko'),
    _buildAnswer('challenge_6','ko'),
    _buildAnswer('challenge_7','ko'),
    _buildAnswer('challenge_8','ko'),
    _buildAnswer('challenge_9','ko'),
    _buildAnswer('challenge_10','ko'),
    _buildAnswer('challenge_11','ko'),
    _buildAnswer('challenge_12','ko'),
  ];
}

function _listAnswersLastCompetenceFailed() {
  return [
    _buildAnswer('challenge_1','ok'),
    _buildAnswer('challenge_2','ok'),
    _buildAnswer('challenge_3','ok'),
    _buildAnswer('challenge_4','ok'),
    _buildAnswer('challenge_5','ok'),
    _buildAnswer('challenge_6','ok'),
    _buildAnswer('challenge_7','ok'),
    _buildAnswer('challenge_8','ok'),
    _buildAnswer('challenge_9','ok'),

    _buildAnswer('challenge_10','ko'),
    _buildAnswer('challenge_11','ko'),
    _buildAnswer('challenge_12','ko'),
  ];
}

function _listAnswersThirdCompetenceFailedAndReproductibilityLessThan80() {
  return [
    _buildAnswer('challenge_1','ok'),
    _buildAnswer('challenge_2','ko'),
    _buildAnswer('challenge_3','ok'),
    _buildAnswer('challenge_4','ok'),
    _buildAnswer('challenge_5','ok'),
    _buildAnswer('challenge_6','ok'),
    _buildAnswer('challenge_7','ok'),
    _buildAnswer('challenge_8','ko'),
    _buildAnswer('challenge_9','ko'),
    _buildAnswer('challenge_10','ok'),
    _buildAnswer('challenge_11','ko'),
    _buildAnswer('challenge_12','ok'),
  ];
}

const pixComp1 = 10;
const pixComp2 = 20;
const pixComp3 = 30;
const pixComp4 = 40;
const totalPix = pixComp1 + pixComp2 + pixComp3 + pixComp4;

const listAssessments = [
  _buildCompetence('1.1', 'comp_1', pixComp1, 1),
  _buildCompetence('2.2', 'comp_2', pixComp2, 2),
  _buildCompetence('3.3', 'comp_3', pixComp3, 3),
  _buildCompetence('4.4', 'comp_4', pixComp4, 4),
];

describe('Unit | Service | Certification Service', function() {

  describe('#getResult', () => {
    context('when reproductibility is < 50%', () => {

      it('should return totalScore = 0', () => {
        // given
        const listAnswers = _listAnswersAllFalseAnswers();

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.totalScore).to.equal(0);
      });
      it('should return list of competences with all certifiedLevel at -1', () => {
        // given
        const listAnswers = _listAnswersAllFalseAnswers();
        const expectedCertifiedCompetences = [{
          id: 'comp_1',
          pixScore: 10,
          estimatedLevel: 1,
          name: '1.1',
          certifiedLevel: -1
        }, {
          id: 'comp_2',
          pixScore: 20,
          estimatedLevel: 2,
          name: '2.2',
          certifiedLevel: -1
        }, {
          id: 'comp_3',
          pixScore: 30,
          estimatedLevel: 3,
          name: '3.3',
          certifiedLevel: -1
        }, {
          id: 'comp_4',
          pixScore: 40,
          estimatedLevel: 4,
          name: '4.4',
          certifiedLevel: -1 } ];

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });

    });
    context('when reproductibility is between 80% and 100%', () => {
      it('should return totalScore = all pix', () => {
        // given
        const listAnswers = _listAnswersAllCorrectAnswers();

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.totalScore).to.equal(totalPix);
      });

      it('should return list of competences with all certifiedLevel equal to estimatedLevel', () => {
        // given
        const listAnswers = _listAnswersAllCorrectAnswers();
        const expectedCertifiedCompetences = [{
          id: 'comp_1',
          pixScore: 10,
          estimatedLevel: 1,
          name: '1.1',
          certifiedLevel: 1
        }, {
          id: 'comp_2',
          pixScore: 20,
          estimatedLevel: 2,
          name: '2.2',
          certifiedLevel: 2
        }, {
          id: 'comp_3',
          pixScore: 30,
          estimatedLevel: 3,
          name: '3.3',
          certifiedLevel: 3
        }, {
          id: 'comp_4',
          pixScore: 40,
          estimatedLevel: 4,
          name: '4.4',
          certifiedLevel: 4 } ];

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });
      it('should return totalScore = (all pix - one competence pix) when one competence is totally false', () => {
        // given
        const listAnswers = _listAnswersLastCompetenceFailed();

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.totalScore).to.equal(totalPix - pixComp4);
      });
      it('should return list of competences with certifiedLevel = estimatedLevel except for failed competence', () => {
        // given
        const listAnswers = _listAnswersLastCompetenceFailed();
        const expectedCertifiedCompetences = [{
          id: 'comp_1',
          pixScore: 10,
          estimatedLevel: 1,
          name: '1.1',
          certifiedLevel: 1
        }, {
          id: 'comp_2',
          pixScore: 20,
          estimatedLevel: 2,
          name: '2.2',
          certifiedLevel: 2
        }, {
          id: 'comp_3',
          pixScore: 30,
          estimatedLevel: 3,
          name: '3.3',
          certifiedLevel: 3
        }, {
          id: 'comp_4',
          pixScore: 40,
          estimatedLevel: 4,
          name: '4.4',
          certifiedLevel: -1 } ];

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });
    });

    context('when reproductibility is between 50% and 80%', () => {
      it('should return totalScore = all pix minus 8 for one competence with 1 error and minus all pix for others false competences', () => {
        // given
        const listAnswers = _listAnswersThirdCompetenceFailedAndReproductibilityLessThan80();
        const malusForFalseAnswer = 8;
        const expectedScore = totalPix - pixComp3 - 2*malusForFalseAnswer;

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.totalScore).to.equal(expectedScore);
      });
      it('should return list of competences with certifiedLevel less or equal to estimatedLevel', () => {
        // given
        const listAnswers = _listAnswersThirdCompetenceFailedAndReproductibilityLessThan80();
        const expectedCertifiedCompetences = [{
          id: 'comp_1',
          pixScore: 10,
          estimatedLevel: 1,
          name: '1.1',
          certifiedLevel: 0
        }, {
          id: 'comp_2',
          pixScore: 20,
          estimatedLevel: 2,
          name: '2.2',
          certifiedLevel: 2
        }, {
          id: 'comp_3',
          pixScore: 30,
          estimatedLevel: 3,
          name: '3.3',
          certifiedLevel: -1
        }, {
          id: 'comp_4',
          pixScore: 40,
          estimatedLevel: 4,
          name: '4.4',
          certifiedLevel: 3 } ];

        // when
        const result = certificationService.getResult(listAnswers, listChallenges, listAssessments);

        // then
        expect(result.listCertifiedCompetences).to.deep.equal(expectedCertifiedCompetences);
      });

    });
  });
});
