const Bookshelf = require('../../../infrastructure/bookshelf');
const CertificationChallenge = require('../../../domain/models/CertificationChallenge');

module.exports = Bookshelf.Model.extend({
  tableName: 'certification-challenges',

  toDomain() {
    return new CertificationChallenge({
      id: this.get('id'),
      challengeId: this.get('challengeId'),
      competenceId: this.get('competenceId'),
      associatedSkill: this.get('associatedSkill'),
      courseId: this.get('courseId')
    });
  }
});
