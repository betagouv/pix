const Assessment = require('../models/assessment');

module.exports = {

  save: {
    handler: (request, reply) => {
      const response = reply({});
      response.statusCode = 201;
      return response;
      // const newAssessment = new Assessment();
      // newAssessment.save(function () {
      //   return reply({}).code(201);
      // });
    }
  }

};
