Set.prototype.union = function(setB) {
  var union = new Set(this);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
}

Set.prototype.difference = function(setB) {
  var difference = new Set(this);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

class Assessment {
  constructor(course, answers) {
    this.course = course;
    this.answers = answers;
  }

  get validatedSkills() {
    const validated = new Set();
    this.answers.forEach(answer => {
      if (answer.result === 'ok') {
        answer.challenge.skills.forEach(skill => {
          skill.getEasierWithin(this.course.tubes).forEach(validatedSkill => {
            validated.add(validatedSkill);
          });
        })
      }
    });
    return validated;
  }

  get failedSkills() {
    const failed = new Set();
    this.answers.forEach(answer => {
      if (answer.result !== 'ok') {
        answer.challenge.hardestSkill.getHarderWithin(this.course.tubes).forEach(validatedSkill => {
          failed.add(validatedSkill);
        });
      }
    });
    return failed;
  }

  _probaOfCorrectAnswer(level, difficulty) {
    return 1 / (1 + Math.exp(-(level - difficulty)));
  }

  _computeLikelihood(level, answers) {
    return -Math.abs(answers.map(answer => answer.binaryOutcome - this._probaOfCorrectAnswer(level, answer.maxDifficulty)).reduce((a, b) => a + b));
  }

  get estimatedLevel() {
    if (this.answers.length === 0) {
      return 2;
    }
    let maxLikelihood = -Infinity;
    let level = 0.5;
    let estimatedLevel = 0.5;
    while (level < 8) {
      const likelihood = this._computeLikelihood(level, this.answers);
      if (likelihood > maxLikelihood) {
        maxLikelihood = likelihood;
        estimatedLevel = level;
      }
      level += 0.5;
    }
    return estimatedLevel;
  }

  _extraValidatedSkillsIfSolved(challenge) {
    let extraValidatedSkills = new Set();
    challenge.skills.forEach(skill => {
      extraValidatedSkills = extraValidatedSkills.union(skill.getEasierWithin(this.course.tubes));
    });
    return extraValidatedSkills.difference(this.validatedSkills);
  }

  _extraFailedSkillsIfUnsolved(challenge) {
    let extraFailedSkills = new Set(challenge.hardestSkill.getHarderWithin(this.course.tubes));
    return extraFailedSkills.difference(this.failedSkills);
  }

  _computeReward(challenge) {
    const proba = this._probaOfCorrectAnswer(this.estimatedLevel, challenge.hardestSkill.difficulty);
    const nbExtraSkillsIfSolved = this._extraValidatedSkillsIfSolved(challenge).size;
    const nbFailedSkillsIfUnsolved = this._extraFailedSkillsIfUnsolved(challenge).size;
    return proba * nbExtraSkillsIfSolved + (1 - proba) * nbFailedSkillsIfUnsolved;
  }

  get filteredChallenges() {
    const answeredChallenges = this.answers.map(answer => answer.challenge);
    return this.course.challenges.filter(challenge => !answeredChallenges.includes(challenge));
  }

  get nextChallenge() {
    const filteredChallenges = this.filteredChallenges;
    let bestChallenge = filteredChallenges[0];
    let maxReward = 0;
    filteredChallenges.forEach(challenge => {
      const reward = this._computeReward(challenge);
      if (reward > maxReward) {
        maxReward = reward;
        bestChallenge = challenge;
      }
    });
    return bestChallenge;
  }
}

module.exports = Assessment;
