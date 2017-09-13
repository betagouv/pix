const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const AssessmentAuhorization = require('../../../../lib/application/preHandlers/assessment-authorization');

describe.only('Unit | Pre-handler | Assessment Authorization', () => {

  describe('#verify', () => {
    it('should be a function', () => {
      // then
      expect(AssessmentAuhorization.verify).to.be.a('function');
    });
  });
});
