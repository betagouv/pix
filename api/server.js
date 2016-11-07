const Hapi = require('hapi');

const config = require('./config/settings');
const plugins = require('./config/plugins');
const routes = require('./config/routes');

const server = new Hapi.Server();
server.connection({ port: config.port });


var validate = function (decoded, request, callback) {

  // TODO : implement something real
  console.log(decoded);
  return callback(null, true);
    
};


server.register(plugins, (err) => {

  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.auth.strategy('jwt', 'jwt',
    { key: 'secret',          // Never Share your secret key
      validateFunc: validate,            // validate function defined above
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    });

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

