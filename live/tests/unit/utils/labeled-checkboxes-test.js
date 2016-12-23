import { expect } from 'chai';
import { describe, it } from 'mocha';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';


describe('Unit | Utility | labeled checkboxes', function() {

  describe('Success cases', function() {
    const cases = [
      { when: 'nominal case',
        proposals: ['prop 1','prop 2','prop 3','prop 4'],
        answers : [false, true],
        output: [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]] },
      { when: 'one answer only',
        proposals: ['prop 1','prop 2','prop 3','prop 4'],
        answers : [true],
        output: [['prop 1', true], ['prop 2', false], ['prop 3', false], ['prop 4', false]] },
      { when: 'empty answers',
        proposals: ['prop 1','prop 2','prop 3','prop 4'],
        answers : [],
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]] },
      { when: 'wrong format for answers',
        proposals: ['prop 1','prop 2','prop 3','prop 4'],
        answers : undefined,
        output: [] },
      { when: 'wrong format for answers\'s elements',
        proposals: ['prop 1','prop 2','prop 3','prop 4'],
        answers : [true, 'false'],
        output: [] },
      { when: 'no proposals',
        proposals: [],
        answers : [false, true],
        output: [] },
      { when: 'wrong format for proposals',
        proposals: {}, // object !
        answers : [false, true],
        output: [] },
      { when: 'wrong format for proposals\'s elements',
        proposals: ['prop1', {}],
        answers : [false, true],
        output: [] },
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
