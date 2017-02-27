const { describe, it } = require('mocha');
const { expect } = require('chai');
const controller = require('../../../lib/application/assessments/assessment-controller');


describe('Acceptance | Application | assessment-controller-utils', function () {

  describe('#nextNode', function () {

    [
      { title: 'direction is increasing', node: 'web4', dir: 1, answer: 'web5' },
      { title: 'direction is decreasing', node: 'rechInfo3', dir: -1, answer: 'rechInfo2' },
    ].forEach(testCase => {

      it(`should return ${testCase.answer} when ${testCase.title} and node is ${testCase.node}`, function () {
        const result = controller.nextNode(testCase.node, testCase.dir);
        expect(result).to.equal(testCase.answer);
      });
    });

  });

  describe('#propagateAcquix', function () {

    const allKnowledge = {'web3': 1, 'web4': 1, 'web5': 1, 'web6': 1};

    [
      { title: 'direction is increasing', startNode: 'web4', dir: 1, answer: ['web4', 'web5', 'web6'] },
      { title: 'direction is decreasing', startNode: 'web4', dir: -1, answer: ['web3', 'web4'] }
    ].forEach(testCase => {

      it(`should return ${testCase.answer} when ${testCase.title} and node is ${testCase.node}`, function () {
        const result = controller.propagateAcquix(allKnowledge, testCase.startNode, testCase.dir);
        expect(result.sort()).to.deep.equal(testCase.answer.sort());
      });
    });

  });
});
