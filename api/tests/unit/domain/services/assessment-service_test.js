const { describe, it, expect } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/assessment-service');

describe('Unit | Service | AssessmentService', function () {



  it('should exist', function () {
    expect(service).to.exist;
  });
  it('getAssessmentNextChallengeId should exist', function () {
    expect(service.getAssessmentNextChallengeId).to.exist;
  });


});
