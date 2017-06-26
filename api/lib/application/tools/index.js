const ToolsController = require('./tools-controller');

exports.register = function(server, options, next) {

  server.route([{
    method: 'DELETE',
    path: '/api/tools/cache',
    config: {handler: ToolsController.removeCacheEntry, tags: ['api']}
  }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'tools-api',
  version: '1.0.0'
};
