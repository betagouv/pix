const Assessment = require('../models/assessment');

const Boom = require('boom');

module.exports = {

  list: {
    handler: (request, reply) => {

      Assessment.fetchAll().then((assessments) => {

        reply(`{"assessments": ${JSON.stringify(assessments)} }`).type('application/json');
      });
    }
  },

  save: {
    handler: (request, reply) => {
      new Assessment(request.payload)
        .save()
        .then((assessment) => {
          reply(`{"assessment": ${JSON.stringify(assessment)} }`).type('application/json');
        });
    }
  },

  update: {
    handler: (request, reply) => {
      reply('Todo');
    }
  }

};
