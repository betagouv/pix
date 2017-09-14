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
        qb.orderBy('createdAt', 'desc');
      })
      .fetchAll()
      .then(assessments => assessments.models);
  }
};
