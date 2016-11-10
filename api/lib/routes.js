'use strict';

const server = require('../server');
const Assessments = require('./controllers/assessments');
const Answers = require('./controllers/answers');
const Users = require('./controllers/users');
const Courses = require('./controllers/courses');
const Challenges = require('./controllers/challenges');

/*
 function greeting(name, callback) {
 console.error(`#greeting with name ${name}`);
 const response = {
 message : `Hello ${name}!`
 };
 callback(null, response);
 }

 server.method('greeting', greeting, {
 cache: {
 expiresIn: 15 * 1000,
 generateTimeout: 100
 }
 });


 */

module.exports = [

  { method: 'GET',  path: '/api/users',                               config: Users.list },
  { method: 'GET',  path: '/api/users/{id}',                          config: Users.get },
  { method: 'POST', path: '/api/users',                               config: Users.save },

  { method: 'POST', path: '/api/assessments',                         config: Assessments.save },
  { method: 'GET',  path: '/api/assessments/{id}/next',               config: Assessments.getNextChallenge },
  { method: 'GET',  path: '/api/assessments/{id}/next/{challengeId}', config: Assessments.getNextChallenge },
  { method: 'GET',  path: '/api/assessments/{id}',                    config: Assessments.get },

  { method: 'POST', path: '/api/answers',                             config: Answers.save },
  { method: 'GET', path: '/api/answers/{id}',                         config: Answers.get },

  { method: 'GET',  path: '/api/courses',                             config: Courses.list },
  { method: 'GET',  path: '/api/courses/{id}',                        config: Courses.get },

  { method: 'GET',  path: '/api/challenges',                          config: Challenges.list },
  { method: 'GET',  path: '/api/challenges/{id}',                     config: Challenges.get },

  {
    method: 'GET', path: '/api/greeting/{name}', config: {
      handler: (request, reply) => {
        server.methods.greeting(request.params.name, (err, result) => {
          reply(result);
        })
      }
    }
  }

].map((route) => {
  route.config.cors = { origin: ['*'] };
  return route;
});
