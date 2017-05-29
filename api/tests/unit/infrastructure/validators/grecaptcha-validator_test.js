const {describe, it, expect} = require('../../../test-helper');
const gRecaptcha = require('../../../../lib/infrastructure/validators/grecaptcha-validator');

describe.only('Unit | Service | google-recaptcha-validator', () => {

  describe('#google reCaptcha validator rendering', () => {
    it('should be a function', function() {
      // then
      expect(gRecaptcha.verify).to.be.a('function');
    });

  });
});
