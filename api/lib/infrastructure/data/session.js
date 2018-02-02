const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

module.exports = Bookshelf.model('Session', {
  tableName: 'sessions',

  validations: {
    certificationCenter: [{
      method: 'isLength',
      error: 'Vous n\'avez pas renseignez de centre de certification.', args: { min: 1 }
    }],
    address: [{
      method: 'isLength',
      error: 'Vous n\'avez pas renseignez d\'adresse.', args: { min: 1 }
    }],
    examiner: [{
      method: 'isLength',
      error: 'Vous n\'avez pas renseignez d\'examinateur.', args: { min: 1 }
    }],
    room: [{
      method: 'isLength',
      error: 'Vous n\'avez pas renseignez de salle.', args: { min: 1 }
    }],
    date: [{
      method: 'isLength',
      error: 'Vous n\'avez pas renseignez de date de session.', args: { min: 1 }
    }],
    time: [{
      method: 'isLength',
      error: 'Vous n\'avez pas renseignez d\'heure de session.', args: { min: 1 }
    }]
  }
});
