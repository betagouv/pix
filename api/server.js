const Hapi = require('hapi');

const config = require('./lib/settings');
const plugins = require('./lib/plugins');
const routes = require('./lib/routes');

const server = new Hapi.Server();

server.connection({ port: config.port });
server.register(plugins);
server.register(require('./lib/controllers/challenges'));
server.route(routes);

module.exports = server;

