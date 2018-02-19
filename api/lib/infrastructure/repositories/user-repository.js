const BookshelfUser = require('../../infrastructure/data/user');
const User = require('../../domain/models/User');
const { AlreadyRegisteredEmailError } = require('../../domain/errors');

function _toDomain(bookshelfUser) {
  const modelObjectInJSON = bookshelfUser.toJSON();
  return new User(modelObjectInJSON);
}

module.exports = {

  findByEmail(email) {
    return BookshelfUser
      .where({ email })
      .fetch({ require: true })
      .then(_toDomain);
  },

  findUserById(userId) {
    return BookshelfUser
      .where({ id: userId })
      .fetch({ require: true });
  },

  save(userRawData) {
    return new BookshelfUser(userRawData).save();
  },

  validateData(userRawData) {
    return new BookshelfUser(userRawData).validationErrors();
  },

  isEmailAvailable(email) {
    return BookshelfUser
      .where({ email })
      .fetch()
      .then(user => {
        if (user) {
          return Promise.reject(new AlreadyRegisteredEmailError());
        }

        return Promise.resolve(email);
      });
  },

  updatePassword(id, password) {
    return BookshelfUser.where({ id }).save({ password, cgu: true }, {
      patch: true,
      require: false
    });
  }
};
