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

  describe('if solution type is QROCM-dep', function () {

    const failedCases = [
      {
        when: 'Badly formatted solution',
        answer: 'num1: Google\nnum2: Yahoo',
        solution: 'solution like a QCU',
      },
      {
        when: 'Answer is empty and solution is also empty',
        answer: '',
        solution: '\n',
      },
      {
        when: 'Answer is empty and solution is normal',
        answer: '',
        solution: twoPossibleSolutions,
      },
      {
        when: 'Solution is not a String',
        answer: 'num1: " google.fr"\nnum2: "Yahoo"',
        solution: {a: new Date()},
      },
      {
        when: 'Answer is incorrect',
        answer: 'num1: Foo\nnum2: Bar',
        solution: twoPossibleSolutions,
      },
      {
        when: 'User duplicated a correct answer',
        answer: 'num1: google.fr\nnum2: google.fr',
        solution: twoPossibleSolutions,
      }
    ];

    failedCases.forEach(function (testCase) {
      it('Should return "ko" when : ' + testCase.when + ' , answer is ' + testCase.answer + '", and solution is "' + escape(testCase.solution) + '"', function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROCM-dep', testCase.solution);
        expect(service.match(answer, solution.value, solution.scoring)).to.equal('ko');
      });
    });

    const maximalScoreCases = [
      {
        when: 'Both answers are correct with 1 solution',
        answer: 'num1: Google\nnum2: Yahoo',
        solution: 'Google:\n- Google\nYahoo:\n- Yahoo'
      },
      {
        when: 'Both answers are correct with 1 solution that contains only numbers',
        answer: 'num1: 123\nnum2: 987',
        solution: 'Google:\n- 987\nYahoo:\n- 123'
      },
      {
        when: 'Both answers are correct with 2 solutions',
        answer: 'num1: Google\nnum2: Yahoo',
        solution: twoPossibleSolutions
      },
      {
        when: 'Both answers are correct with 2 solutions, and there are unbreakable spaces in both answers',
        answer: 'num1: G o o g l e  \nnum2:  Y a h o o ',
        solution: twoPossibleSolutions
      },
      {
        when: 'Both answers are correct, and solutions contains spaces everywhere',
        answer: 'num1: Google\nnum2: Yahoo',
        solution: 'Google:\n-  G o o g le  \nYahoo:\n-   Y a h o    o   '
      },
      {
        when: 'Both answers are correct with 2 solutions, 2nd version',
        answer: 'num1: Google Search\nnum2: Yahoo Answer',
        solution: twoPossibleSolutions
      },
      {
        when: 'Both answers are correct, with levenshtein 0 < x =< 0.25, uppercase, space and punctuation errors',
        answer: 'num1: GooGLe!!! earch  \nnum2:  Yahoo  n-?swer  ',
        solution: twoPossibleSolutions
      },
      {
        when: 'All answers are correct, with 3 solutions',
        answer: 'num1: Google Search\nnum2: Yahoo Answer\nnum3: Bing',
        solution: threePossibleSolutions
      }
    ];

    maximalScoreCases.forEach(function (testCase) {
      it('Should return "ok" when : ' + testCase.when + ' , answer is ' + testCase.answer + '", and solution is "' + escape(testCase.solution) + '"', function () {
        const answer = buildAnswer(testCase.answer);
        const solution = buildSolution('QROCM-dep', testCase.solution);
        expect(service.match(answer, solution.value, solution.scoring)).to.equal('ok');
      });
    });

  });

  describe('if solution type is QROCM-dep with scoring', function () {

    it('should return "ko" for badly formatted solution', function () {
      const answer = buildAnswer('num1: Google\nnum2: Yahoo');
      const solution = buildSolution('QROCM-dep', 'solution like a QCU', '1: @acquix');
      expect(service.match(answer, solution.value, solution.scoring)).to.equal('ko');
    });

    it('should return "ko" when answer is incorrect', function () {
      const answer = buildAnswer('num1: Foo\nnum2: Bar');
      const solution = buildSolution('QROCM-dep', twoPossibleSolutions, '1: @acquix');
      expect(service.match(answer, solution.value, solution.scoring)).to.equal('ko');
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
      }
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
      }
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

