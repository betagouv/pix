const service = require('../../../../lib/domain/services/solution-service-qcm');

describe('Unit | Service | SolutionServiceQcm :', function () {

  describe('#match', function () {

    const successfulCases = [
      { answer: '1', solution: '1' },
      { answer: '1, 2', solution: '1, 2' },
      { answer: '1, 2, 3', solution: '1, 2, 3' },
      { answer: '1,2,3', solution: '1,2,3' },
      { answer: '3, 2, 1', solution: '1, 2, 3' },
      { answer: '1,2,3', solution: '1, 2, 3' },
      { answer: '1,   2,   3   ', solution: '1, 2, 3' },
      { answer: '1, 2, 3', solution: '1, 2, 3' }
    ];

    successfulCases.forEach(function (testCase) {
      it('should return "ok" when answer is ' + testCase.answer + ' and solution is ' + testCase.solution, function () {
        expect(service.match(testCase.answer, testCase.solution)).to.equal('ok');
      });
    });

    const failedCases = [
      { answer: '2', solution: '1' },
      { answer: '1, 3', solution: '1, 2' },
      { answer: '1, 2, 3', solution: '1, 2' },
      { answer: '3, 1', solution: '1, 2' }
    ];

    failedCases.forEach(function (testCase) {
      it('should return "ko" when answer is ' + testCase.answer + ' and solution is ' + testCase.solution, function () {
        expect(service.match(testCase.answer, testCase.solution)).to.equal('ko');
      });
    });

  });
});
