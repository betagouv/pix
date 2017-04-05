const { describe, it, expect } = require('../../../test-helper');
const { _getSmallestLevenshteinDistance, t3 } = require('../../../../lib/domain/services/validation-comparison');

describe('Unit | Service | Validation Comparison', function () {

  /**
   * #_getSmallestLevenshteinDistance(str1, str2)
   */

  describe('_getSmallestLevenshteinDistance', function() {

    it('Should exist', function () {
      expect(_getSmallestLevenshteinDistance).to.exist;
    });

    describe('Should return levenshtein distance if only one adminAnswer is given', function () {

      const successfulCases = [
        { should: 'If both are empty', arg1: '', arg2: [''], output: 0 },
        { should: 'If both are same', arg1: 'a', arg2: ['a'], output: 0 },
        { should: 'If they have one different character', arg1: 'a', arg2: ['ab'], output: 1 },
        { should: 'If they have two different characters', arg1: 'book', arg2: ['back'], output: 2 },
      ];

      successfulCases.forEach(function (testCase) {
        it(testCase.should + ', for example arg1 ' + JSON.stringify(testCase.arg1) + ', and arg2 ' + JSON.stringify(testCase.arg2) + ' => ' + testCase.output + '', function () {
          expect(_getSmallestLevenshteinDistance(testCase.arg1, testCase.arg2)).to.equal(testCase.output);
        });
      });

    });

    describe('Should return the smallest levenshtein distance if many adminAnswers are given', function () {

      const successfulCases = [
        { should: 'If the smallest difference is 0', arg1: '', arg2: ['', 'a'], output: 0 },
        { should: 'If the smallest difference is 0, with non empty args', arg1: 'a', arg2: ['a', 'ab'], output: 0 },
        { should: 'If the smallest difference is 1, smallest is at position 0 in array', arg1: 'a', arg2: ['ab', 'abdcef'], output: 1 },
        { should: 'If the smallest difference is 1, smallest is at position 1 in array', arg1: 'a', arg2: ['abdcef', 'ab'], output: 1 },
        { should: 'If the smallest difference is 1, with 3 differents String as arg2', arg1: 'a', arg2: ['abcdef', 'ab', 'azerty'], output: 1 },
        { should: 'If the difference is 2 for all elements', arg1: 'book', arg2: ['back', 'buck'], output: 2 },
      ];

      successfulCases.forEach(function (testCase) {
        it(testCase.should + ', for example arg1 ' + JSON.stringify(testCase.arg1) + ', and arg2 ' + JSON.stringify(testCase.arg2) + ' => ' + testCase.output + '', function () {
          expect(_getSmallestLevenshteinDistance(testCase.arg1, testCase.arg2)).to.equal(testCase.output);
        });
      });
    });
  });

  /**
   * #t3(answer, solutions)
   */

  describe('#t3', () => {

    it('checks sanity', () => {
      expect(t3).to.exist;
    });

    [
      { scenario: 'the answer is a solution', userAnswer: 'a', solutions: ['a', 'b'], expected: 0},
      { scenario: 'there is 3/4 good character', userAnswer: 'faco', solutions: ['face', 'faac'], expected: 1/4},
      { scenario: 'the best ratio is 3/4 good character on one the solutions', userAnswer: 'faco', solutions: ['face', 'allo'], expected: 1/4},
      { scenario: 'the answer has nothing to see compare to solution', userAnswer: 'Linkedin', solutions: ['Viadeo', 'Instagram'], expected: 3/4},
    ].forEach((data) => {
      it(data.scenario, () => {
        // then
        expect(t3(data.userAnswer, data.solutions)).to.equal(data.expected);
      });

      // The following test cases are the old ones from deprecated class "solution-service-utiles_test.js"
      const successfulCases = [
        { should: 'If only one adminAnswer', userAnswer: 'a1', adminAnswer: ['a1'], output: 0 },
        { should: 'If many adminAnswers', userAnswer: 'a1', adminAnswer: ['a1', 'a2', 'a3'], output: 0 },
        { should: 'If ratio is 0.1, single adminAnswer', userAnswer: 'abbbbbbbbb', adminAnswer: ['bbbbbbbbbb'], output: 0.1 },
        { should: 'If ratio is 0.2, multiple adminAnswer', userAnswer: 'quack', adminAnswer: ['quacks', 'azertyqwerk'], output: 0.2 },
        { should: 'If ratio is 0.5, multiple adminAnswer', userAnswer: 'book', adminAnswer: ['back', 'buck'], output: 0.5 },
        { should: 'If ratio is 10, single adminAnswer', userAnswer: 'a', adminAnswer: ['bbbbbbbbbb'], output: 10 },
      ];

      successfulCases.forEach((testCase) => {
        it(testCase.should + ', for example userAnswer ' + JSON.stringify(testCase.userAnswer) + ', and adminAnswer ' + JSON.stringify(testCase.adminAnswer) + ' => ' + testCase.output + '', function () {
          expect(t3(testCase.userAnswer, testCase.adminAnswer)).to.equal(testCase.output);
        });
      });
    });

  });
});
