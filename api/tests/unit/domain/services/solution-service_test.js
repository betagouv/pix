const { describe, it } = require('mocha');
const { expect } = require('chai');

const service = require('../../../../lib/domain/services/solution-service');
const Answer = require('../../../../lib/domain/models/data/answer');
const Solution = require('../../../../lib/domain/models/referential/solution');
const _ = require('../../../../lib/infrastructure/utils/lodash-utils');

describe('Unit | Service | SolutionService', function () {

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
    return answer;
  }

  describe('#match', function () {

    describe('if answer is #ABAND#', function () {

      it('should return "aband"', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('SOME_TYPE', null);
        expect(service.match(answer, solution)).to.equal('aband');
      });

      // XXX prevent bug after commit #9332cd2
      it('should return "aband" even if question type is QCU', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QCU', 'Good answer');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QCM', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QCM', 'Good answer');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QROC', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QROC', 'Good answer');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QROCM-ind', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QROCM-ind', '9lettres:\n- courgette\n6lettres:\n- tomate\n- etamot');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QROCM-dep', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QROCM-dep', twoPossibleSolutions);
        expect(service.match(answer, solution)).to.equal('aband');
      });

    });

    describe('if solution type is QRU', function () {

      it('should return "not-implemented"', function () {
        const answer = buildAnswer('some answer');
        const solution = buildSolution('QRU', 'some value');
        expect(service.match(answer, solution)).to.equal('not-implemented');
      });

    });

    describe('if solution type is QCU', function () {

      it('should return "ok" when answer and solution are equal', function () {
        const answer = buildAnswer('same value');
        const solution = buildSolution('QCU', 'same value');
        expect(service.match(answer, solution)).to.equal('ok');
      });

      it('should return "timedout" when answer and solution are equal, but timeout is negative', function () {
        const answer = buildAnswer('same value', -15);
        const solution = buildSolution('QCU', 'same value');
        expect(service.match(answer, solution)).to.equal('timedout');
      });

      it('should return "ko" when answer and solution are different', function () {
        const answer = buildAnswer('answer value');
        const solution = buildSolution('QCU', 'different solution value');
        expect(service.match(answer, solution)).to.equal('ko');
      });

    });

    describe('if solution type is QCM', function () {

      const successfulCases = [
        {answer: '1', solution: '1'},
        {answer: '1, 2', solution: '1, 2'},
        {answer: '1, 2, 3', solution: '1, 2, 3'},
        {answer: '1,2,3', solution: '1,2,3'},
        {answer: '3, 2, 1', solution: '1, 2, 3'},
        {answer: '1,2,3', solution: '1, 2, 3'},
        {answer: '1,   2,   3   ', solution: '1, 2, 3'},
        {answer: '1, 2, 3', solution: '1, 2, 3'}
      ];

      successfulCases.forEach(function (testCase) {
        it('should return "ok" when answer is "' + testCase.answer + '" and solution is "' + testCase.solution + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QCM', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ok');
        });
      });

      const failedCases = [
        {answer: '2', solution: '1'},
        {answer: '1, 3', solution: '1, 2'},
        {answer: '1, 2, 3', solution: '1, 2'},
        {answer: '3, 1', solution: '1, 2'}
      ];

      failedCases.forEach(function (testCase) {
        it('should return "ko" when answer is "' + testCase.answer + '" and solution is "' + testCase.solution + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QCM', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ko');
        });
      });

    });

    describe('if solution type is QROC', function () {

      const successfulCases = [
        {case:'(single solution) same answer and solution', answer: 'Answer', solution: 'Answer'},
        {case:'(single solution) same answer and solution, but first is uppercased, last is lowercased', answer: 'ANSWER', solution: 'answer'},
        {case:'(single solution) answer with spaces', answer: 'aaa bbb ccc', solution: 'aaabbbccc'},
        {case:'(single solution) answer with accent, but solution hasnt', answer: 'wîth àccénts', solution: 'with accents'},
        {case:'(single solution) answer is 0.1 away from solution', answer: '0123456789', solution: '123456789'},
        {case:'(single solution) answer is 0.25 away from solution', answer: '01234', solution: '1234'},
        {case:'(multiple solutions) answer is amongst solution', answer: 'variant 1', solution: 'variant 1\nvariant 2\nvariant 3\n'},
        {case:'(multiple solutions) answer is 0.2 away from a solution', answer: 'quack', solution: 'quacks\nazertysqdf\nblablabla\n'},
        {case:'(multiple solutions) answer is 0.25 away from a solution', answer: 'quak', solution: 'qvak\nqwak\nanything\n'}
      ];

      successfulCases.forEach(function (testCase) {
        it(testCase.case + ', should return "ok" when answer is "' + testCase.answer + '" and solution is "' + escape(testCase.solution) + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QROC', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ok');
        });
      });


      const failingCases = [
        {case:'solution do not exists', answer: 'any answer'},
        {case:'solution is empty', answer: '', solution : ''},
        {case:'answer is not a String', answer: new Date(), solution : ''},
        {case:'solution is not a String', answer: 'a', solution : new Date()},
        {case:'answer does not match any solution variants', answer: 'abadanswer', solution: 'unmatched solution variant'},
        {case:'(single solution) answer is 0.3 away from solution', answer: '0123456789', solution: '1234567'},
        {case:'(single solution) answer is 0.5 away from solution', answer: '0123456789', solution: '12345'},
        {case:'(single solution) answer is 10 away from solution', answer: 'a', solution: '0123456789'},
        {case:'(single solution) same answer and solution, but answer is lowercased, solution is uppercased', answer: 'answer', solution: 'ANSWER'},
        {case:'(single solution) answer without accent, but solution has', answer: 'with accents', solution: 'wîth àccénts'},
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


    describe('if solution type is QROCM-ind', function () {

      const successfulCases = [{
        case: '(nominal case) Each answer strictly respect a corresponding solution',
        answer: '9lettres: courgette\n6lettres: tomate',
        solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
      },
      {
        case: '(nominal case) Each answer strictly respect another corresponding solution',
        answer: '9lettres: courgette\n6lettres: chicon',
        solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
      },
      {
        case: '(nominal case) Each answer correctly match its solution, with worst levenshtein distance below or equal to 0.25',
        answer: '9lettres: abcd\n6lettres: ghjkl',
        solution: '9lettres:\n- abcde\n6lettres:\n- ghjklm\n- ghjklp\n- ghjklz'
      }
      ];

      successfulCases.forEach(function (testCase) {
        it(testCase.case + ', should return "ok" when answer is "' + testCase.answer + '" and solution is "' + escape(testCase.solution) + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QROCM-ind', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ok');
        });
      });

      const failingCases = [
        {case:'solution do not exists', answer: 'any answer'},
        {case:'solution is empty', answer: '', solution : ''},
        {case:'answer is not a String', answer: new Date(), solution : ''},
        {case:'solution is not a String', answer: 'a', solution : new Date()},
        {case:'solution has no separator \\n', answer: 'blabla', solution : 'blabla'},
        {
          case: 'Each answer points to the solution of another question',
          answer: '9lettres: tomate\n6lettres: courgette',
          solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
        },
        {
          case: 'One of the levenshtein distance is above 0.25',
          answer: '9lettres: abcde\n6lettres: ghjkl',
          solution: '9lettres:\n- abcdefg\n6lettres:\n- ghjklm\n- ghjklp\n- ghjklz'
        },
        {
          case: 'All of the levenshtein distances are above 0.25',
          answer: '9lettres: abcde\n6lettres: ghjklpE11!!',
          solution: '9lettres:\n- abcdefg\n6lettres:\n- ghjklm\n- ghjklp\n- ghjklz'
        }
      ];

      failingCases.forEach(function (testCase) {
        it(testCase.case + ', should return "ko" when answer is "' + testCase.answer + '" and solution is "' + escape(testCase.solution) + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QROCM-ind', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ko');
        });
      });

    });


    describe('if solution type is QROCM-dep', function () {

      it('should return "ko" for badly formatted solution', function () {
        const answer = buildAnswer('num1: Google\nnum2: Yahoo');
        const solution = buildSolution('QROCM-dep', 'solution like a QCU');
        expect(service.match(answer, solution)).to.equal('ko');
      });

      it('should return "ko" when answer is incorrect', function () {
        const answer = buildAnswer('num1: Foo\nnum2: Bar');
        const solution = buildSolution('QROCM-dep', twoPossibleSolutions);
        expect(service.match(answer, solution)).to.equal('ko');
      });

      it('should return "ko" when user duplicated a correct answer', function () {
        const answer = buildAnswer('num1: google.fr\nnum2: google.fr');
        const solution = buildSolution('QROCM-dep', twoPossibleSolutions);
        expect(service.match(answer, solution)).to.equal('ko');
      });

      const maximalScoreCases = [
        {
          answer: 'num1: " google.fr"\nnum2: "Yahoo anSwer "',
          solution: twoPossibleSolutions
        },
      ];

      maximalScoreCases.forEach(function (testCase) {
        it('should return "ok" when answer is "' + testCase.answer + '" and solution is "' + escape(testCase.solution) + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QROCM-dep', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ok');
        });
      });

    });

    describe.only('if solution type is QROCM-dep with scoring', function () {

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
          answer: 'num1: " google.fr"\nnum2: "Yahoo anSwer "\nnum3: bing',
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
          expect(service.match(answer, solution)).to.equal('ok');
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
          expect(service.match(answer, solution)).to.equal('partially');
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
          when: 'no correct answer is given and scoring is 1-3',
          answer: 'num1: " tristesse"\nnum2: "bad answer"',
          solution: twoPossibleSolutions,
          scoring: '1: @acquix\n2: @acquix\n3: @acquix'
        },
        {
          when: 'similar good answer is given and scoring is 2-3',
          answer: 'num1: "google"\nnum2: "google.fr"',
          solution: twoPossibleSolutions,
          scoring: '2: @acquix\n3: @acquix'
        },
        {
          when: 'duplicate good answer exactly, and scoring is 2-3',
          answer: 'num1: "google"\nnum2: "google"',
          solution: twoPossibleSolutions,
          scoring: '2: @acquix\n3: @acquix'
        }
      ];

      failedCases.forEach(function (testCase) {
        it('should return "ko" when ' + testCase.when, function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QROCM-dep', testCase.solution, testCase.scoring);
          expect(service.match(answer, solution)).to.equal('ko');
        });
      });

    });

    describe('if solution type is none of the above ones', function () {

      it('should return "not-implemented"', function () {
        const answer = buildAnswer('some value');
        const solution = buildSolution('SOME_TYPE', 'Some variant');
        expect(service.match(answer, solution)).to.equal('not-implemented');
      });

    });

  });

  describe('#_timedOut', function () {
    it('should return "timedout" if result is partially correct and timeout is negative', function () {
      expect(service._timedOut('partially', -5)).to.equal('timedout');
    });
    it('should return "timedout" if result is "ok" and timeout is negative', function () {
      expect(service._timedOut('ok', -5)).to.equal('timedout');
    });
    it('should return "partially" if result is partially correct and timeout is 0', function () {
      expect(service._timedOut('partially', 0)).to.equal('partially');
    });
    it('should return "ok" if result is "ok" and timeout is 0', function () {
      expect(service._timedOut('ok', 0)).to.equal('ok');
    });
    it('should return "partially" if result is partially correct and timeout is positive', function () {
      expect(service._timedOut('partially', 11)).to.equal('partially');
    });
    it('should return "ok" if result is "ok" and timeout is 0', function () {
      expect(service._timedOut('ok', 11)).to.equal('ok');
    });
    it('should return "aband" if result is "aband" and timeout is negative', function () {
      expect(service._timedOut('aband', -5)).to.equal('aband');
    });
    it('should return "aband" if result is "aband" and timeout is 0', function () {
      expect(service._timedOut('aband', 0)).to.equal('aband');
    });
    it('should return "aband" if result is "aband" and timeout is positive', function () {
      expect(service._timedOut('aband', 11)).to.equal('aband');
    });
  });

});
