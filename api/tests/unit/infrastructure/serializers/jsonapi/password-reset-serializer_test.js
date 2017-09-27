const { describe, it, expect } = require('../../../../test-helper');
const serializer = require('../../../../../lib/infrastructure/serializers/jsonapi/password-reset-serializer');

describe('Unit | Serializer | JSONAPI | snapshot-serializer', () => {

  describe('#serialize', () => {
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
      const result = serializer.serialize(user);

      // then
      expect(result).to.deep.equal(expectedSerializedUser);
    });
  });

});
