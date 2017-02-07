/* global describe, it, expect */

const service = require('../../../../lib/domain/services/challenge-service');
const Answer = require('../../../../lib/domain/models/data/answer');

function _buildAnswer(result) {
  const answer = new Answer({id: 'answer_id'});
  answer.attributes = {result};
  return answer;
}

describe('Unit | Service | ChallengeService', function () {

  describe('getRevalidationStatistics', function () {
    it('should be able to return added ok solution', function () {
      const old_answer = [_buildAnswer('ko')];
      const new_answer = [_buildAnswer('ok')];
      const under_test = service.getRevalidationStatistics(old_answer, new_answer);
      expect(under_test.ok).to.equal(1);
      expect(under_test.okDiff).to.equal(1);
    });
    it('should be able to return removed ok solution', function () {
      const old_answer = [_buildAnswer('ok')];
      const new_answer = [_buildAnswer('ko')];
      const under_test = service.getRevalidationStatistics(old_answer, new_answer);
      expect(under_test.ok).to.equal(0);
      expect(under_test.okDiff).to.equal(-1);
    });
    it('should be able to add all ok solutions', function () {
      const old_answer = [_buildAnswer('ok'), _buildAnswer('ok')];
      const new_answer = [_buildAnswer('ok'), _buildAnswer('ok')];
      const under_test = service.getRevalidationStatistics(old_answer, new_answer);
      expect(under_test.ok).to.equal(2);
      expect(under_test.okDiff).to.equal(0);
    });
  });

});
