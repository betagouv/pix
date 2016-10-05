const Assessment = require('../models/assessment');

const Boom = require('boom');

module.exports = {

  list: {
    handler: (request, reply) => {

      Assessment.fetchAll().then((assessments) => {

        reply(`{"assessments": ${JSON.stringify(assessments)} }`).type('application/json');
      });
    }
  }

};
