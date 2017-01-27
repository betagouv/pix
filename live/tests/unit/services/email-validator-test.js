import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Service | EmailValidatorService', function() {

  setupTest('service:email-validator', {});

  it('exists', function() {
    const controller = this.subject();
    expect(controller).to.be.ok;
  });

  it('should return false if invalid or empty email is provided', function () {
    // given
    const validator = this.subject();
    // then
    expect(validator.emailIsValid('')).to.be.false;
    expect(validator.emailIsValid('my')).to.be.false;
    expect(validator.emailIsValid('my@')).to.be.false;
    expect(validator.emailIsValid('my@google')).to.be.false;
    expect(validator.emailIsValid('my@google.')).to.be.false;
  });

  it('should return true when email is valid (contains [a-z]@domain ', function () {
    // when
    const validator = this.subject();
    // then
    expect(validator.emailIsValid('email@pix.com')).to.be.true;
  });

});
