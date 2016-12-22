import { expect } from 'chai';
import { describe, it } from 'mocha';
import stringToArrayOfBoolean from 'pix-live/utils/string-to-array-of-boolean';


describe('Unit | Utility | string to array of boolean', function() {

  describe('Fail cases', function() {
    const cases = [
      { when: 'no input ',                      input: undefined,      output: [] },
      { when: 'wrong arg format',               input: new Date(),     output: [] },
      { when: 'empty string',                   input: '',             output: [] },
      { when: 'csv with 0',                     input: '0,1,2',        output: [] },
      { when: 'csv with negative',              input: '0,1,-2',       output: [] },
      { when: 'csv with float',                 input: '1,2,3.14,4',   output: [] },
      { when: 'csv with text',                  input: '1,azerty,3,4', output: [] },
      { when: 'csv with spaces between number', input: '1,2 3,4,5',    output: [] }
    ];

    cases.forEach(function (testCase) {
      it('Should reply to '
          + JSON.stringify(testCase.input)
          + ' with '
          + JSON.stringify(testCase.output)
          + ' when ' + testCase.when,
          function () {
            expect(JSON.stringify(stringToArrayOfBoolean(testCase.input))).to.equal(JSON.stringify(testCase.output));
          });
    });
  });

  describe('Success cases', function() {
    const cases = [
      { when: 'simple number', input: '4', output: [false, false, false, true] },
      { when: 'ordered, positive-integer csv', input: '1,2,4', output: [true, true, false, true] },
      { when: 'unordered, positive-integer csv', input: '4,1,2', output: [true, true, false, true] },
      { when: 'unordered, positive-integer with spaces around commas', input: '4 , 1,2 ', output: [true, true, false, true] },
      { when: 'unordered, positive-integer with spaces around commas, and uneeded commas', input: ',4 , 1,,,2 ,', output: [true, true, false, true] },
    ];

    cases.forEach(function (testCase) {
      it('Should reply to '
          + JSON.stringify(testCase.input)
          + ' with '
          + JSON.stringify(testCase.output)
          + ' when ' + testCase.when,
          function () {
            expect(JSON.stringify(stringToArrayOfBoolean(testCase.input))).to.equal(JSON.stringify(testCase.output));
          });
    });
  });


});
