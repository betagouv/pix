const CatSkill = require('../../cat/skill');
const CatChallenge = require('../../cat/challenge');
const CatCourse = require('../../cat/course');
const CatAnswer = require('../../cat/answer');
const CatAssessment = require('../../cat/assessment');

// TODO: Déclencher une erreur quand pas de skill ?

function getAdaptedAssessment(answersPix, challengesPix, skills) {
  const challenges = [];
  const challengesById = {};
  const catSkills = {};

  challengesPix.forEach(challengePix => {
    if (challengePix.skills) {
      const challengeCatSkills = challengePix.skills.map(skill => new CatSkill(skill.name));
      const challenge = new CatChallenge(challengePix.id, challengePix.status, challengeCatSkills, challengePix.timer);

      challenges.push(challenge);
      challengesById[challengePix.id] = challenge;
    }
  });

  skills.forEach(skill => catSkills[skill.name] = new CatSkill(skill.name));
  const competenceSkills = new Set(Object.values(catSkills));

  const course = new CatCourse(challenges, competenceSkills);

  const answers = answersPix.map(answer =>
    new CatAnswer(challengesById[answer.get('challengeId')], answer.get('result'))
  );

  return new CatAssessment(course, answers);
}

module.exports = {
  getAdaptedAssessment
};
