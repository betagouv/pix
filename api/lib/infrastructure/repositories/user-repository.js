const User = require('../../domain/models/data/user');

module.exports = {
  findUserById(userId){
    return new Promise((resolve, reject) => {
      User
        .where({id: userId})
        .fetch()
        .then(user => resolve(user))
        .catch(reject);
    });
  }
};
