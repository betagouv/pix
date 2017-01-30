const service = require('../../../../lib/domain/services/email-validator');

describe('Unit | Service | EmailValidator', function () {

  it('should return false when email is null, empty, or not provided', function () {
    // then
      expect(service.emailIsValid('')).to.be.false;
      expect(service.emailIsValid(null)).to.be.false;
      expect(service.emailIsValid()).to.be.false;
  });

  it('should return true if provided email is valid according a regular expression', function () {
    // then
    expect(service.emailIsValid('follower@pix.fr')).to.be.true;
  });
});
