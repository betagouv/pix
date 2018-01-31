const _ = require('lodash');

class Course {
  constructor(challenges, competenceSkills) {
    this.challenges = challenges;
    this.competenceSkills = competenceSkills;
  }

  get tubes() {
    const tubes = {};
    this.challenges.forEach(challenge => {
      challenge.skills.forEach(skill => {
        const tubeName = skill.tubeName;

        if(!tubes[tubeName]) tubes[tubeName] = [];

        if(!_.find(tubes[tubeName], skill)) tubes[tubeName].push(skill);
      });
    });
    Object.keys(tubes).forEach(tubeName =>  {
      tubes[tubeName] = _.sortBy(tubes[tubeName], ['difficulty']);
    });
    return tubes;
  }

  computePixScoreOfSkills() {
    const pixScoreOfSkills = {};
    const numberOfSkillsOfDifficulty = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
    this.competenceSkills.forEach(skill => {
      numberOfSkillsOfDifficulty[skill.difficulty]++;
    });
    this.competenceSkills.forEach(skill => {
      pixScoreOfSkills[skill.name] = Math.min(4, 8 / numberOfSkillsOfDifficulty[skill.difficulty]);
    });
    return pixScoreOfSkills;
  }
}

module.exports = Course;
