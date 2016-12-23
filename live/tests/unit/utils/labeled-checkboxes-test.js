import { expect } from 'chai';
import { describe, it } from 'mocha';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';


describe('Unit | Utility | labeled checkboxes', function() {

  // describe('Fail cases', function() {
  //   const cases = [
  //     { when: 'no input ',   input: undefined,      output: [] },
  //     { when: 'wrong arg format',               input: new Date(),     output: [] },
  //   ];

  //   cases.forEach(function (testCase) {
  //     it('Should reply to '
  //         + JSON.stringify(testCase.input)
  //         + ' with '
  //         + JSON.stringify(testCase.output)
  //         + ' when ' + testCase.when,
  //         function () {
  //           expect(JSON.stringify(stringToArrayOfBoolean(testCase.input))).to.equal(JSON.stringify(testCase.output));
  //         });
  //   });
  // });

  describe('Success cases', function() {
    const cases = [
      { when: 'nominal case',
        proposals: ['prop 1','prop 2','prop 3','prop 4'],
        answers : [false, true],
        output: [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]] },
    ];

    cases.forEach(function (testCase) {
      it('Should reply to proposals'
          + JSON.stringify(testCase.proposals)
          + ' and answers '
          + JSON.stringify(testCase.answers)
          + ' with '
          + JSON.stringify(testCase.output)
          + ' when ' + testCase.when,
          function () {
            expect(JSON.stringify(labeledCheckboxes(testCase.proposals, testCase.answers))).to.equal(JSON.stringify(testCase.output));
          });
    });

  });


});
