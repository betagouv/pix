const Assessment = require('../../domain/models/data/assessment');

module.exports = {

  get(id) {
    return Assessment
      .where('id', id)
      .fetch({ withRelated: ['answers'] });
  },

  findCompletedAssessmentsByUserId(id) {
    return new Promise((resolve, reject) => {
      Assessment
        .where('userId', id)
        .fetchAll()
        .then(assessments => resolve(assessments.models))
        .catch(reject);
    });
  }
};
