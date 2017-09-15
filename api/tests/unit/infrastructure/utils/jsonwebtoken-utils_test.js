const jwt = require('jsonwebtoken');
const { describe, it, expect } = require('../../../test-helper');
const settings = require('../../../../lib/settings');
const jsonwebtokenUtils = require('../../../../lib/infrastructure/utils/jsonwebtoken-utils');

describe('Unit | Utils | jsonwebtoken', function() {

  describe('#extractUserId', () => {

    [
      { headers: {}, expectedUserId: null, description: 'no authorization' },
      { headers: { authorization: null }, description: 'null authorization' },
      { headers: { authorization: undefined }, description: 'undefined authorization' },
      { headers: { authorization: 'invalid_token' }, expectedUserId: null, description: 'Invalid token' }

    ].forEach(({ headers, description }) => {
      it(`should return null  when ${description} given`, (done) => {
        // when
        const userId = jsonwebtokenUtils.extractUserId(headers);

        // then
        expect(userId).to.equal(null);
        done();
      });
    });

    describe('when valid token is given', () => {

      it('should return an user id', (done) => {
        // given
        const user = { id: 7, email: 'tokenizr@pix.fr' };
        const token = createToken(user);
        const headers = { authorization: `Bearer ${token}` };

        // when
        const userId = jsonwebtokenUtils.extractUserId(headers);

        // then
        expect(userId).to.equal(user.id);
        done();
      });
    });
  });
});

function createToken(user) {
  return jwt.sign({
    user_id: user.id,
    email: user.email
  }, settings.authentication.secret, { expiresIn: settings.authentication.tokenLifespan });
}
