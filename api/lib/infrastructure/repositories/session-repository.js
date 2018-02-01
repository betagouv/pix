const _ = require('lodash');
const BookshelfSession = require('../data/session');
const Session = require('../../domain/models/Session')

function _toDomain(bookshelfSession) {
  const sessionReturned = bookshelfSession.toJSON();
  sessionReturned.certificationCenter = sessionReturned['certification-center'];

  return new Session(sessionReturned);
}

function _fromModelToBookshelf(sessionModel) {
  sessionModel['certification-center'] = sessionModel.certificationCenter;

  return _.omit(sessionModel, ['certificationCenter']);
}

module.exports = {
  save: (sessionModel) => {

    const sessionToBeSaved = _fromModelToBookshelf(sessionModel);

    return new BookshelfSession(sessionToBeSaved)
      .save()
      .then(_toDomain);
  }
};
