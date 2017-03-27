const { describe, it, expect } = require('../../../test-helper');
const { t3 } = require('../../../../lib/domain/services/validation-comparison');


describe('Unit | Service | Validation Comparison', function () {

  describe('#t3', function () {

    [
      { scenario: 'the answer is a solution', userAnswer: 'a', solutions: ['a', 'b'], expected: 0},
      { scenario: 'there is 3/4 good character', userAnswer: 'faco', solutions: ['face', 'faac'], expected: 1/4},
      { scenario: 'the best ratio is 3/4 good character on one the solutions', userAnswer: 'faco', solutions: ['face', 'allo'], expected: 1/4},
      { scenario: 'the answer has nothing to see compare to solution', userAnswer: 'Linkedin', solutions: ['Viadeo', 'Instagram'], expected: 3/4},
    ].forEach((data) => {
      it(data.scenario, function () {
        // then
        expect(t3(data.userAnswer, data.solutions)).to.equal(data.expected);
      });


    });

  });
});
