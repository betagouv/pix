const User = require('../../domain/models/data/user');
const {NotFoundError} = require('../../domain/errors');

module.exports = {
  findUserById(userId){
    return new Promise((resolve, reject) => {
      User
        .where({id: userId})
        .fetch()
        .then((foundedUSer) => {
          if(!foundedUSer) {
            return reject(new NotFoundError());
          }
          return resolve(foundedUSer);
        });
    });
  }
};
