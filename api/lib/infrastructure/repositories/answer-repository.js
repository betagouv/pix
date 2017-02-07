const Answer = require('../../domain/models/data/answer');

module.exports = {

  findByChallengeAndAssessment(challengeId, assessmentId) {

    return new Promise((resolve, reject) => {

      Answer
      .where({
        challengeId,
        assessmentId
      })
      .fetch()
      .then((answer) => resolve(answer))
      .catch((err) => reject(err));

    });

  },

  findByChallenge(challengeId) {

    return new Promise((resolve, reject) => {

      Answer
        .where({
          challengeId
        })
        .fetchAll()
        .then((answers) => resolve(answers.models))
        .catch((err) => reject(err));

    });

  }
};
