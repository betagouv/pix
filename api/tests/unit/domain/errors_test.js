const { describe, it, expect } = require('../../test-helper');
const errors = require('../../../lib/domain/errors');

describe('Unit | Domain | Errors', () => {

  it('should export a NotFoundError', () => {
    expect(errors.NotFoundError).to.exist;
  });

  it('should export a InvalidTokenError', () => {
    expect(errors.InvalidTokenError).to.exist;
  });

  it('should export a InvaliOrganizationIdError', () => {
    expect(errors.InvaliOrganizationIdError).to.exist;
  });

  describe('#userNotFoundError', () => {
    it('should export a userNotFoundError', () => {
      expect(errors.userNotFoundError).to.exist;
    });

    it('should have a getErrorMessage method', (done) => {
      // given
      const expectedErrorMessage = {
        data: {
          email: ['Cette adresse email n’existe pas.']
        }
      };

      // then
      const userNotFoundError = errors.userNotFoundError;
      expect(userNotFoundError.getErrorMessage).to.be.a('function');
      expect(userNotFoundError.getErrorMessage()).to.eql(expectedErrorMessage);
      done();
    });
  });

  describe('#internalError', () => {
    it('should export a internalError', () => {
      expect(errors.internalError).to.exist;
    });

    it('should have a getErrorMessage method', (done) => {
      // given
      const expectedErrorMessage = {
        data: {
          error: ['Une erreur interne est survenue.']
        }
      };

      // then
      const internalError = errors.internalError;
      expect(internalError.getErrorMessage).to.be.a('function');
      expect(internalError.getErrorMessage()).to.eql(expectedErrorMessage);
      done();
    });
  });

});
