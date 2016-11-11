const Hapi = require('hapi');

const config = require('./lib/settings');
const logger = require('./lib/infrastructure/logger');

const server = new Hapi.Server({
  'connections': {
    'routes': {
      'cors': true
    }
  }
});

server.connection({ port: config.port });

server.register([

  /* API */
  require('./lib/application/answers'),
  require('./lib/application/assessments'),
  require('./lib/application/challenges'),
  require('./lib/application/courses'),
  require('./lib/application/users'),

  /* Hapi plugins */
  require('blipp'),
  {
    register: require('good'),
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            response: '*',
            log: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  }
], (err) => {
  if (err) logger.error(err)
});

module.exports = server;

