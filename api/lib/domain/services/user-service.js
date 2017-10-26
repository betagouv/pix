const _ = require('lodash');

const { UserNotFoundError } = require('../errors');

const userRepository = require('../../../lib/infrastructure/repositories/user-repository');
const assessmentRepository = require('../../../lib/infrastructure/repositories/assessment-repository');
const challengeRepository = require('../../../lib/infrastructure/repositories/challenge-repository');
const answerRepository = require('../../../lib/infrastructure/repositories/answer-repository');
const competenceRepository = require('../../../lib/infrastructure/repositories/competence-repository');

function _loadAnwsersByAssessments(assessments) {
  const fetchAnswersPromises = [];
  assessments.forEach((assessment) => {
    fetchAnswersPromises.push(answerRepository.findByAssessment(assessment.id));
  });

  return Promise.all(fetchAnswersPromises);
}

function _extendEveryCompetenceWithSkill(competences) {
  return _(competences).reduce((result, value) => {

    value['skills'] = [];

    result.push(value);

    return result;
  }, []);
}

function _getCompetenceById(competences, competenceId) {
  return _(competences).find((competence) => competence.id === competenceId);
}

module.exports = {
  isUserExistingByEmail(email) {
    return userRepository
      .findByEmail(email)
      .then(() => true)
      .catch(() => {
        throw new UserNotFoundError();
      });
  },

  isUserExistingById(id) {
    return userRepository
      .findUserById(id)
      .then(() => true)
      .catch(() => {
        throw new UserNotFoundError();
      });
  },

  getSkillProfile(userId) {
    return assessmentRepository
      .findCompletedAssessmentsByUserId(userId)
      .then(_loadAnwsersByAssessments)
      .then((answersByAssessments) => Promise.all([
        challengeRepository.list(), competenceRepository.list(), answersByAssessments
      ]))
      .then(([challenges, competences, answersByAssessments]) => {
        competences = _extendEveryCompetenceWithSkill(competences);

        const answers = _.flatten(answersByAssessments).filter((answer) => answer.get('result') === 'ok');
        _(answers).forEach((answer) => {

          const challenge = _(challenges).find((challenge) => challenge.id === answer.get('challengeId'));

          if(challenge) {
            const competence = _getCompetenceById(competences, challenge.competence);

            _(challenge.knowledgeTags).forEach((skill) => {
              if(competence) {
                const skills = competence.skills;

                if(!_.includes(skills, skill)) {
                  skills.push(skill);
                }
              }
            });
          }
        });

        return competences;
      });
  }
};
