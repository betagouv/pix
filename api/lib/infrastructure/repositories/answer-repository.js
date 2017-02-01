const Answer = require('../../domain/models/data/answer');

module.exports = {

  findByChallengeAndAssessment(challengeId, assessmentId) {

    return new Promise((resolve, reject) => {

      Answer
        .where({
          challengeId: challengeId,
          assessmentId: assessmentId
        })
        .fetch()
        .then(resolve)
        .catch(reject);

    });

  }
};
