const UserController = require('./user-controller');

exports.register = function (server, options, next) {

  server.route([
    { method: 'GET', path: '/api/users', handler: UserController.list },
    { method: 'GET', path: '/api/users/{id}', handler: UserController.get },
    { method: 'POST', path: '/api/users', handler: UserController.save }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'users-api',
  version: '1.0.0'
};
