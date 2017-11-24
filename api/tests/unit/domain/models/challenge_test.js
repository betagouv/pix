const { describe, it, expect } = require('../../../test-helper');
const Challenge = require('../../../../lib/domain/models/Challenge');
const Skill = require('../../../../lib/domain/models/Skill');

describe('Unit | Domain | Models | Challenge', () => {

  describe('#hasSkill', () => {

    it('should return false when the skill is not known', () => {
      // Given
      const challenge = new Challenge();

      // When
      const result = challenge.hasSkill(new Skill('@recherche1'));

      // Then
      expect(result).to.be.false;
    });

    it('should return true when the skill is known', () => {
      // Given
      const challenge = new Challenge();
      challenge.skills.push(new Skill('@recherche1'));

      // When
      const result = challenge.hasSkill(new Skill('@recherche1'));

      // Then
      expect(result).to.be.true;
    });
  });

  describe('#isPublished', () => {

    it('should return true when the challenge is "validé"', () => {
      // given
      const challenge = new Challenge();
      challenge.status = 'validé';

      // when
      const result = challenge.isPublished();

      // then
      expect(result).to.equal(true);
    });

    it('should return true when the challenge is "validé sans test"', () => {
      // given
      const challenge = new Challenge();
      challenge.status = 'validé sans test';

      // when
      const result = challenge.isPublished();

      // then
      expect(result).to.equal(true);
    });

    it('should return false when the challenge is "proposé"', () => {
      // given
      const challenge = new Challenge();
      challenge.status = 'proposé';

      // when
      const result = challenge.isPublished();

      // then
      expect(result).to.equal(false);
    });

    it('should return true when the challenge is "pré-validé"', () => {
      // given
      const challenge = new Challenge();
      challenge.status = 'pré-validé';

      // when
      const result = challenge.isPublished();

      // then
      expect(result).to.equal(true);
    });

    it('should return false when the challenge is "archive"', () => {
      // given
      const challenge = new Challenge();
      challenge.status = 'archive';

      // when
      const result = challenge.isPublished();

      // then
      expect(result).to.equal(false);
    });
  });

});
