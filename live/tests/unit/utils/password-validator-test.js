import { expect } from 'chai';
import { describe, it } from 'mocha';
import isPasswordvalid from 'pix-live/utils/password-validator';

describe('Unit | Utility | password validator', function() {
  describe('Invalid password', function() {
    it('should contains at least 8 characters:', function() {
      const password = 'F26251J';
      expect(isPasswordvalid(password)).to.be.false;
    });
    it('should contains at least one letter ', function() {
      const password = '227729827';
      expect(isPasswordvalid(password)).to.be.false;
    });
    it('should contains at least a figure', function() {
      const password = 'FFFFFFFF';
      expect(isPasswordvalid(password)).to.be.false;
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
