const Assessment = require('../models/assessment');

module.exports = {

  save: {
    handler: (request, reply) => {
      const newAssessment = new Assessment();
      newAssessment.save().then(function () {
        return reply({}).code(201);
      });
    }
  }

};
