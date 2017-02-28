const { describe, it, expect } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/solution-service-qroc');
const Answer = require('../../../../lib/domain/models/data/answer');
const Solution = require('../../../../lib/domain/models/referential/solution');
const _ = require('../../../../lib/infrastructure/utils/lodash-utils');

describe('Unit | Service | SolutionServiceQROC ', function () {


  function buildSolution(type, value, scoring) {
    const solution = new Solution({id: 'solution_id'});
    solution.type = type;
    solution.value = value;
    solution.scoring = _.ensureString(scoring).replace(/@/g, '');
    return solution.value;
  }

  function buildAnswer(value, timeout) {
    const answer = new Answer({id: 'answer_id'});
    answer.attributes = {value, timeout};
    return answer.get('value');
  }

  describe('match | if solution type is QROC', function () {

    const successfulCases = [
      {case:'(single solution) same answer and solution', answer: 'Answer', solution: 'Answer'},
      {case:'(single solution) same answer and solution, but first is uppercased, last is lowercased', answer: 'ANSWER', solution: 'answer'},
      {case:'(single solution) same answer and solution, but answer is lowercased, solution is uppercased', answer: 'answer', solution: 'ANSWER'},
      {case:'(single solution) answer with spaces, solution hasnt', answer: 'a b c d e', solution: 'abcde'},
      {case:'(single solution) answer with unbreakable spaces, solution hasnt', answer: 'a b c d e', solution: 'abcde'},
      {case:'(single solution) solution with trailing spaces', answer: 'abcd', solution: '    abcd   '},
      {case:'(single solution) solution with trailing spaces and uppercase', answer: 'aaa bbb ccc', solution: '    AAABBBCCC   '},
      {case:'(single solution) answer with accent, but solution hasnt', answer: 'îàé êêê', solution: 'iae eee'},
      {case:'(single solution) answer is 0.1 away from solution', answer: '0123456789', solution: '123456789'},
      {case:'(single solution) answer is 0.25 away from solution', answer: '01234', solution: '1234'},
      {case:'(single solution) solution contains too much spaces', answer: 'a b c d e', solution: 'a b c d e'},
      {case:'(single solution) answer without accent, but solution has', answer: 'with accents eee', solution: 'wîth àccénts êêê'},
      {case:'(multiple solutions) answer is amongst solution', answer: 'variant 1', solution: 'variant 1\nvariant 2\nvariant 3\n'},
      {case:'(multiple solutions) answer is 0.2 away from a solution', answer: 'quack', solution: 'quacks\nazertysqdf\nblablabla\n'},
      {case:'(multiple solutions) answer is 0.25 away from a solution', answer: 'quak', solution: 'qvak\nqwak\nanything\n'}
    ];

    successfulCases.forEach(function (testCase) {
      it (testCase.case + ', should return "ok" when answer is "' + testCase.answer + '" and solution is "' + escape(testCase.solution) + '"', function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROC', testCase.solution);
        expect(service.match(answer, solution)).to.equal('ok');
      });
    });


    const failingCases = [
      {case:'solution do not exists', answer: 'any answer'},
      {case:'solution is not a String', answer: 'a', solution : new Date()},
      {case:'solution is empty', answer: '', solution : ''},
      {case:'answer is not a String', answer: new Date(), solution : ''},
      {case:'answer does not match any solution variants', answer: 'abandoned answer', solution: 'unmatched solution variant'},
      {case:'(single solution) answer is 0.3 away from solution', answer: '0123456789', solution: '1234567'},
      {case:'(single solution) answer is 0.5 away from solution', answer: '0123456789', solution: '12345'},
      {case:'(single solution) answer is 10 away from solution', answer: 'a', solution: '0123456789'},
      {case:'(multiple solutions) answer is minimum 0.4 away from a solution', answer: 'quaks', solution: 'qvakes\nqwakes\nanything\n'}
    ];

    failingCases.forEach(function (testCase) {
      it(testCase.case + ', should return "ko" when answer is "' + testCase.answer + '" and solution is "' + escape(testCase.solution) + '"', function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROC', testCase.solution);
        expect(service.match(answer, solution)).to.equal('ko');
      });
    });

  });
});

