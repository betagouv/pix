const { expect } = require('../../../test-helper');
const User = require('../../../../lib/domain/models/User');

describe('Unit | Domain | Models | User', () => {

  describe('constructor', () => {

    it('should build an Organization from raw JSON', () => {
      // given
      const rawData = {
        id: 1,
        firstName: 'Son',
        lastName: 'Goku',
        email: 'email@example.net',
        password: 'pix123',
        cgu: true
      };

      // when
      const user = new User(rawData);

      // then
      expect(user.id).to.equal(1);
      expect(user.firstName).to.equal('Son');
      expect(user.lastName).to.equal('Goku');
      expect(user.email).to.equal('email@example.net');
      expect(user.password).to.equal('pix123');
      expect(user.cgu).to.equal(true);
    });

  });

  describe('hasRolePixMaster', () => {

    it('should return true if user has role PixMaster ', () => {
      // given
      const rawData = {
        id: 1,
        firstName: 'Son',
        lastName: 'Goku',
        email: 'email@example.net',
        password: 'pix123',
        cgu: true,
        pixRoles: [{
          name: 'PIX_MASTER'
        }]
      };

      const user = new User(rawData);

      // when
      const hasRole = user.hasRolePixMaster;

      // then
      expect(hasRole).to.be.deep.equal({
        name: 'PIX_MASTER'
      });
    });
  });

});
