const { describe, it, expect } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/solution-service-qcu');
const Answer = require('../../../../lib/domain/models/data/answer');
const Solution = require('../../../../lib/domain/models/referential/solution');
const _ = require('../../../../lib/infrastructure/utils/lodash-utils');

describe('Unit | Service | SolutionServiceQCU ', function () {


  function buildSolution (type, value, scoring) {
    const solution = new Solution({id: 'solution_id'});
    solution.type = type;
    solution.value = value;
    solution.scoring = _.ensureString(scoring).replace(/@/g, '');
    return solution.value;
  }

  function buildAnswer (value, timeout) {
    const answer = new Answer({id: 'answer_id'});
    answer.attributes = {value, timeout};
    return answer.get('value');
  }


  describe('if solution type is QCU', function () {

    it('should return "ok" when answer and solution are equal', function () {
      const answer = buildAnswer('same value');
      const solution = buildSolution('QCU', 'same value');
      expect(service.match(answer, solution)).to.equal('ok');
    });

    it('should return "ko" when answer and solution are different', function () {
      const answer = buildAnswer('answer value');
      const solution = buildSolution('QCU', 'different solution value');
      expect(service.match(answer, solution)).to.equal('ko');
    });

  });
});

