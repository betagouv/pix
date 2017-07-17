const Pack = require('../package');

const plugins = [
  require('inert'),
  require('vision'),
  require('blipp'),
  {
    register: require('hapi-swagger'),
    options: {
      info: {
        'title': 'PIX API Documentation',
        'version': Pack.version
      },
      documentationPath: '/api/documentation'
    }
  },
  {
    register: require('ratify')
  },
  {
    register: require('good'),
    options: {
      reporters: {
        console: [ {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [ {
            response: '*',
            log: '*'
          } ]
        }, {
          module: 'good-console'
        }, 'stdout' ]
      }
    }
  }
];

if(process.env.NODE_ENV === 'test') {
  plugins.push(require('inject-then'));
}

module.exports = plugins;
