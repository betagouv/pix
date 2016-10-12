const Assessment = require('../models/assessment');

module.exports = {

  save: {
    handler: (request, reply) => {
      const newAssessment = new Assessment();
      newAssessment.set('userId', request.payload.userId);
      newAssessment.set('courseId', request.payload.courseId);
      newAssessment.save().then(function (assessment) {
        return reply({assessment}).code(201);
      });
    }
  }

};
