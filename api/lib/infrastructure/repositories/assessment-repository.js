const Assessment = require('../../domain/models/data/assessment');

module.exports = {

  get(id) {
    return Assessment
      .where('id', id)
      .fetch({ withRelated: ['answers'] });
  },

  findCompletedAssessmentsByUserId(userId) {
    return Assessment
      .query(qb => {
        qb.where({ userId });
        qb.whereNotNull('estimatedLevel');
        qb.whereNotNull('pixScore');
      })
      .fetchAll()
      .then(assessments => assessments.models);
  },
  getByUserId(id) {
    return new Promise((resolve, reject) => {
      Assessment
        .where('userId', id)
        .fetchAll()
        .then(assessments => resolve(assessments.models))
        .catch(reject);
    });
  },

  getByUserIdAndAssessmentId(assessmentId, userId) {
    return Assessment
      .query({ where: { id: assessmentId }, andWhere: { userId } })
      .fetch({ require: true });
  }
};
