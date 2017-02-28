const { describe, it, expect } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/solution-service-qrocm-dep');
const Answer = require('../../../../lib/domain/models/data/answer');
const Solution = require('../../../../lib/domain/models/referential/solution');
const _ = require('../../../../lib/infrastructure/utils/lodash-utils');

describe('Unit | Service | SolutionServiceQROCM-dep ', function () {

  const twoPossibleSolutions = 'Google:\n- Google\n- google.fr\n- Google Search\nYahoo:\n- Yahoo\n- Yahoo Answer';
  const threePossibleSolutions = 'Google:\n- Google\n- google.fr\n- Google Search\nYahoo:\n- Yahoo\n- Yahoo Answer\nBing:\n- Bing';


  function buildSolution(type, value, scoring) {
    const solution = new Solution({id: 'solution_id'});
    solution.type = type;
    solution.value = value;
    solution.scoring = _.ensureString(scoring).replace(/@/g, '');
    return solution;
  }

  function buildAnswer(value, timeout) {
    const answer = new Answer({id: 'answer_id'});
    answer.attributes = {value, timeout};
    return answer.get('value');
  }

  describe('if solution type is QROCM-dep with scoring', function () {

    it('should return "ko" for badly formatted solution', function () {
      const answer = buildAnswer('num1: Google\nnum2: Yahoo');
      const solution = buildSolution('QROCM-dep', 'solution like a QCU', '1: @acquix');
      expect(service.match(answer, solution)).to.equal('ko');
    });

    it('should return "ko" when answer is incorrect', function () {
      const answer = buildAnswer('num1: Foo\nnum2: Bar');
      const solution = buildSolution('QROCM-dep', twoPossibleSolutions, '1: @acquix');
      expect(service.match(answer, solution)).to.equal('ko');
    });

    const maximalScoreCases = [
      {
        when: '3 correct answers are given, and scoring is 1-3',
        answer: 'num1: " google.fr"\nnum2: "yahoo answer "\nnum3: bing',
        solution: threePossibleSolutions,
        scoring: '1: @acquix\n2: @acquix\n3: @acquix'
      },
      {
        when: '3 correct answers are given, (all 3 have punctation, accent and spaces errors), and scoring is 1-3',
        answer: 'num1: " g Ooglé.FR!!--"\nnum2: "  Y?,,a h o o AnSwer "\nnum3: BìNg()()(',
        solution: threePossibleSolutions,
        scoring: '1: @acquix\n2: @acquix\n3: @acquix'
      },
      {
        when: '3 correct answers are given, and scoring is 1-2',
        answer: 'num1: " google.fr"\nnum2: "Yahoo anSwer "\nnum3: bing',
        solution: threePossibleSolutions,
        scoring: '1: @acquix\n2: @acquix'
      },
    ];

    maximalScoreCases.forEach(function (testCase) {
      it('should return "ok" when ' + testCase.when, function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROCM-dep', testCase.solution, testCase.scoring);
        expect(service.match(answer, solution.value, solution.scoring)).to.equal('ok');
      });
    });

    const partialScoreCases = [
      {
        when: '1 correct answers are given + 2 wrong, and scoring is 1-3',
        answer: 'num1: " google.fr"\nnum2: "bad answer"\nnum3: "bad answer"',
        solution: threePossibleSolutions,
        scoring: '1: @acquix\n2: @acquix\n3: @acquix'
      },
      {
        when: '1 correct answers are given (despite accent, punctation and spacing errors) + 2 wrong, and scoring is 1-3',
        answer: 'num1: " gooG lè!!.fr"\nnum2: "bad answer"\nnum3: "bad answer"',
        solution: threePossibleSolutions,
        scoring: '1: @acquix\n2: @acquix\n3: @acquix'
      },
      {
        when: '2 correct answers are given + 1 empty, and scoring is 1-3',
        answer: 'num1: " google.fr"\nnum2: "Yahoo anSwer "\nnum3: ""',
        solution: threePossibleSolutions,
        scoring: '1: @acquix\n2: @acquix\n3: @acquix'
      },
    ];

    partialScoreCases.forEach(function (testCase) {
      it('should return "partially" when ' + testCase.when, function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROCM-dep', testCase.solution, testCase.scoring);
        expect(service.match(answer, solution.value, solution.scoring)).to.equal('partially');
      });
    });

    const failedCases = [
      {
        when: '2 correct answers are given but scoring requires 3 correct answers',
        answer: 'num1: " google.fr"\nnum2: "Yahoo anSwer "',
        solution: twoPossibleSolutions,
        scoring: '3: @acquix'
      },
      {
        when: 'No correct answer is given and scoring is 1-3',
        answer: 'num1: " tristesse"\nnum2: "bad answer"',
        solution: twoPossibleSolutions,
        scoring: '1: @acquix\n2: @acquix\n3: @acquix'
      },
      {
        when: 'Similar good answer is given and scoring is 2-3',
        answer: 'num1: "google"\nnum2: "google.fr"',
        solution: twoPossibleSolutions,
        scoring: '2: @acquix\n3: @acquix'
      },
      {
        when: 'Duplicate good answer exactly, and scoring is 2-3',
        answer: 'num1: "google"\nnum2: "google"',
        solution: twoPossibleSolutions,
        scoring: '2: @acquix\n3: @acquix'
      }
    ];

    failedCases.forEach(function (testCase) {
      it('should return "ko" when ' + testCase.when, function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROCM-dep', testCase.solution, testCase.scoring);
        expect(service.match(answer, solution.value, solution.scoring)).to.equal('ko');
      });
    });

  });
});

