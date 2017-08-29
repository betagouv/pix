import { expect } from 'chai';
import { describe, it } from 'mocha';
import isPasswordvalid from 'pix-live/utils/password-validator';

describe('Unit | Utility | password validator', function() {
  describe('Invalid password', function() {
    [
      '',
      ' ',
      null,
      '@pix',
      '@pix.fr',
      '1      1',
      'password',
      '12345678&',
      '+!@)-=`"#&',
      '+!@)-=`"#&1',
    ].forEach(function(badPassword) {
      it(`should return false when password is invalid: ${badPassword}`, function() {
        expect(isPasswordvalid(badPassword)).to.be.false;
      });
    });
  });

  describe('Valid password', function() {
    [
      'PIXBETA1',
      'PIXBETA12',
      'NULLNULL1',
      '12345678a',
      '12345678ab',
      '12345678ab+',
      '12345678ab+!',
      '12345678ab+!@',
      '12345678ab+!@)-=`',
      '12345678ab+!@)-=`"',
      '12345678ab+!@)-=`"#&',
      '1234Password avec espace',
      '1A      A1'
    ].forEach(function(validPassword) {
      it(`should return true if provided password is valid: ${validPassword}`, function() {
        expect(isPasswordvalid(validPassword)).to.be.true;
      });
    });
  });
});
