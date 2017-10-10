const { describe, it, expect } = require('../../../../test-helper');
const serializer = require('../../../../../lib/infrastructure/serializers/jsonapi/password-reset-serializer');

describe('Unit | Serializer | JSONAPI | password-reset-serializer', function() {

  describe('#serializeUser', () => {
    it('should convert a snapshot into a JSON:API compliant object', () => {
      // given
      const user = {
        id: '234567',
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'lskywalker@deathstar.empire',
        password: ''
      };
      const expectedSerializedUser = {
        data: {
          attributes: {
            'first-name': 'Luke',
            'last-name': 'Skywalker',
          },
          id: '234567',
          type: 'users'
        }
      };

      // when
      const result = serializer.serializeUser(user);

      // then
      expect(result).to.deep.equal(expectedSerializedUser);

    });
  });

  describe('#serializeResetDemand', function() {

    it('should convert password-reset-object to JSON-API', () => {
      // given
      const passwordResetDemand = {
        id: 1,
        email: 'toto@pix.fr',
        temporaryKey: 'one key'
      };
      const expectedSerializedPasswordReset = {
        data: {
          type: 'password-resets',
          id: '1',
          attributes: {
            email: 'toto@pix.fr',
            'temporary-key': 'one key'
          }
        }
      };

      const result = serializer.serializeResetDemand(passwordResetDemand);

      // then
      expect(result).to.deep.equal(expectedSerializedPasswordReset);
    });
  });

});
