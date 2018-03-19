const BookshelfSession = require('../data/session');
const Session = require('../../domain/models/Session');

function _toDomain(bookshelfSession) {
  if(bookshelfSession) {
    const sessionReturned = bookshelfSession.toJSON();
    return new Session(sessionReturned);
  }
  return null;
}

module.exports = {
  save: (sessionToBeSaved) => {
    return new BookshelfSession(sessionToBeSaved)
      .save()
      .then(_toDomain);
  },

  isSessionCodeAvailable: (codeStarter) => {
    return BookshelfSession
      .where({ codeStarter })
      .fetch({})
      .then((result) => !result);
  },

  getByCodeStarter: (codeStarter) => {
    return BookshelfSession
      .where({ codeStarter })
      .fetch({})
      .then(_toDomain);
  }
};
