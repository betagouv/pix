const server = require('../server');
const Greetings = require('../app/controllers/greetings');
const Users = require('../app/controllers/users');

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: Greetings.world
  }, {
    method: 'GET',
    path: '/{name}',
    config: Greetings.buddy
  }, {
    method: 'GET',
    path: '/api/users',
    config: Users.list
  }, {
    method: 'GET',
    path: '/api/users/{id}',
    config: Users.get
  }
];
