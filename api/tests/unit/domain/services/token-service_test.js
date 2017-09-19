const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const tokenService = require('../../../../lib/domain/services/token-service');
const User = require('../../../../lib/domain/models/data/user');
const settings = require('../../../../lib/settings');
const jsonwebtoken = require('jsonwebtoken');

describe('Unit | Service | Token Service', function() {

  describe('#extractUserId', () => {

    it('should exist', () => {
      expect(tokenService.extractUserId).to.exist.and.to.be.a('function');
    });

    it('should return userId if the token passed is valid', () => {
      //Given
      const user = new User({ id: 123 });
      const token = tokenService.createTokenFromUser(user);

      //When
      const result = tokenService.extractUserId(token);

      //Then
      expect(result).to.equal(123);
    });

    it('should reject with Error if the token is invalid', () => {
      // Given
      const token = 'eyJhbGciOiJIUzI1NiIsIgR5cCI6IkpXVCJ9.eyJ1c2VyX2lPIjoxMjMsImlhdCI6MTQ5OTA3Nzg2Mn0.FRAAoowTA8Bc6BOzD7wWh2viVN47VrPcGgLuHi_NmKw';

      //When
      const result = tokenService.extractUserId(token);

      //Then
      expect(result).to.equal(null);
    });

  });

  describe('#generateTemporaryKey', function() {

    beforeEach(() => {
      sinon.stub(jsonwebtoken, 'sign');
    });

    afterEach(() => {
      jsonwebtoken.sign.restore();
    });

    it('should be a function', () => {
      expect(tokenService.generateTemporaryKey).to.exist.and.to.be.a('function');
    });

    it('should call sign function from jwt', () => {
      // given
      const signParams = {
        payload: { data: settings.temporaryKey.payload },
        secret: settings.temporaryKey.secret,
        expiration: { expiresIn: settings.temporaryKey.tokenLifespan }
      };

      // when
      tokenService.generateTemporaryKey();

      // then
      sinon.assert.calledOnce(jsonwebtoken.sign);
      sinon.assert.calledWith(jsonwebtoken.sign, signParams.payload, signParams.secret, signParams.expiration);
    });

    it('should return a token generated from jsonWebToken', function() {
      // given

      // when

      // then
    });
  });
});
