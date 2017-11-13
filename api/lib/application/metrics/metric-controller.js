
const { register } = require('prom-client');

module.exports = {
  get(request, reply) {
    const metrics = register.metrics();

    return reply(metrics).type('text/plain');
  }
};
