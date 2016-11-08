const Hapi            = require('hapi');

const config          = require('./config/settings');
const plugins         = require('./config/plugins');
const routes          = require('./config/routes');

const {validateToken} = require('./app/services/token-service');

const server = new Hapi.Server();
server.connection({ port: config.port });

server.register(plugins, (err) => {

  if (err) {
    throw err; 
  }

  server.auth.strategy(
    'jwt', 
    'jwt',
    { 
      key: 'secret',
      validateFunc: validateToken,
      verifyOptions: { algorithms: [ 'HS256' ] }
    }
  );

  server.auth.default('jwt');

  server.route(routes);

  server.start((err) => {

    if (err) {
      throw err;
    }

    server.log('info', 'Server running at: ' + server.info.uri);
  });
});





module.exports = server;

