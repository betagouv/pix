const Skill = require('../../cat/skill');
const Challenge = require('../../cat/challenge');
const Course = require('../../cat/course');
const Answer = require('../../cat/answer');
const Assessment = require('../../cat/assessment');

function getAdaptedAssessment(assessmentPix, answersPix, challengesPix) {
  const challenges = [];
  const challengesById = {};
  challengesPix.forEach(challengePix => {
    const skills = [];
    if (challengePix.knowledgeTags) {
      challengePix.knowledgeTags.forEach(skillName => {
        const tubeName = skillName.slice(0, -1);
        const skillDifficulty = parseInt(skillName.slice(-1));
        skills.push(new Skill(tubeName, skillDifficulty));
      });
      const challenge = new Challenge(challengePix.id, skills);
      challenges.push(challenge);
      challengesById[challengePix.id] = challenge;
    }
  });
  const course = new Course(challenges);
  const answers = [];
  answersPix.forEach(answerPix => {
    answers.push(new Answer(challengesById[answerPix.get('challengeId')], answerPix.get('result')));
  });
  const assessment = new Assessment(course, answers);
  return assessment;
}

module.exports = {
  getAdaptedAssessment
};
