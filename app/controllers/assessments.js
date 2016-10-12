const Assessment = require('../models/assessment');

module.exports = {

  save: {
    handler: (request, reply) => {
      const newAssessment = new Assessment({
        userId: request.payload.userId,
        courseId: request.payload.courseId
      });
      newAssessment.save().then(function (assessment) {
        return reply(assessment).code(201);
      });
    }
  }

};
