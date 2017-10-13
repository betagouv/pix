const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const qmailValidationService = require('../../../../lib/domain/services/qmail-validation-service');

describe.only('Unit | Service | QMail Validation', function() {

  describe('#validateEmail', () => {
    it('should exists', () => {
      expect(qmailValidationService).to.have.property('validateEmail')
        .and.to.be.a('function');
    });

    it('should');
  });

});
