const { describe, it, expect } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/solution-service-qrocm-ind');
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

  describe('if solution type is QROCM-ind', function () {

    const successfulCases = [{
      case: '(nominal case) Each answer strictly respect a corresponding solution',
      answer: '9lettres: courgette\n6lettres: tomate',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'solution contains numbers',
      answer: 'num1: 888\nnum2: 64',
      solution: 'num1:\n- 888\nnum2:\n- 64'
    },
    {
      case: 'leading/trailing spaces in solution',
      answer: '9lettres: c o u r g e t t e\n6lettres: t o m a t e',
      solution: '9lettres:\n-  courgette   \n6lettres:\n-   tomate    \n-   chicon    \n- legume   '
    },
    {
      case: 'uppercases and leading/trailing spaces in solution',
      answer: '9lettres: c o u r g e t t e\n6lettres: t o m a t e',
      solution: '9lettres:\n-  COUrgETTE   \n6lettres:\n-   TOmaTE    \n-   CHICON    \n- LEGUME   '
    },
    {
      case: 'spaces in answer',
      answer: '9lettres: c o u r g e t t e\n6lettres: t o m a t e',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'answer with levenshtein distance below 0.25',
      answer: '9lettres: ourgette\n6lettres: tomae',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'answer with uppercases',
      answer: '9lettres: COURGETTE\n6lettres: TOMATE',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'answer with uppercases and spaces',
      answer: '9lettres: C O U R G E T T E\n6lettres: T O M A T E',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'answer with uppercases spaces, and levenshtein > 0 but <= 0.25',
      answer: '9lettres: C O U G E T T E\n6lettres:  O M A T E',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'answer with uppercases spaces, and levenshtein > 0 but <= 0.25, and accents',
      answer: '9lettres: ç O u -- ;" ;--- _ \' grè TTÊ\n6lettres:  O M A T E',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'unbreakable spaces in answer',
      answer: '9lettres: c o u r g e t t e\n6lettres: t o m a t e',
      solution: '9lettres:\n- courgette\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'Solution has spaces in-between',
      answer: '9lettres: abcdefg\n6lettres: ghjkl',
      solution: '9lettres:\n- a b c d e f g\n6lettres:\n- ghjklm\n- ghjklp\n- ghjklz'
    },
    {
      case: '(nominal case) Each answer strictly respect another corresponding solution',
      answer: '9lettres: patate\n6lettres: legume',
      solution: '9lettres:\n- courgette \n- patate\n6lettres:\n- tomate\n- chicon\n- legume'
    },
    {
      case: 'Each answer correctly match its solution, with worst levenshtein distance below or equal to 0.25',
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
        //abcdefg below creates a levenshtein distance above 0.25
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
});

