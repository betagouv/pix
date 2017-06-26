const cache = require('../../infrastructure/cache');
const jsonwebtoken = require('../../infrastructure/validators/jsonwebtoken-verify');
const {NotFoundError, InvalidTokenError} = require('../../domain/errors');

const removeEntry = function(request) {
  const deletedEntriesCount = cache.del(request.payload['cache-key']);
  return deletedEntriesCount;
};

module.exports = {

  removeCacheEntry(request, reply) {
    const token = request.headers.authorization;
    return jsonwebtoken
      .verify(token)
      .then(() => {
        const deletedEntriesCount = removeEntry(request);
        if(!deletedEntriesCount) {
          throw new NotFoundError();
        }
        return reply('Entry successfully deleted').code(200);
      })
      .catch((err) => {
        let statusCode = 401;
        if(err instanceof InvalidTokenError) {
          err = 'Error on Token';
        } else {
          err = 'Entry key is not found';
          statusCode = 404;
        }
        return reply(err).code(statusCode);
      });

  }
};
