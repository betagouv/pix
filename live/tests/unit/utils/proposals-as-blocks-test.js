import { expect } from 'chai';
import { describe, it } from 'mocha';
import proposalsAsBlocks from 'pix-live/utils/proposals-as-blocks';

describe('Unit | Utility | proposals as blocks', function() {

  const testData = [
    { data: '', expected: [] },
    { data: 'Text', expected: [{ text: 'Text' }] },
    { data: 'Text test plop', expected: [{ text: 'Text test plop' }] },
    { data: '${qroc}', expected: [{ input: 'qroc' }] },
    { data: 'Test: ${test}', expected: [{ text: 'Test:' }, { input: 'test' }] },
    { data: 'Test: ${test} (kilometres)', expected: [{ text: 'Test:' }, { input: 'test' }, { text: '(kilometres)' }] },
    {
      data: '${plop}, ${plop} ${plop}',
      expected: [{ input: 'plop' }, { text: ',' }, { input: 'plop' }, { input: 'plop' }]
    },
    { data: '${plop#var}', expected: [{ input: 'plop', placeholder: 'var' }] },
    { data: 'line1\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] },
    { data: 'line1\r\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] },
    { data: 'line1\n\rline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] },
    { data: 'line1\n\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }
  ];

  testData.forEach(({ data, expected }) => {

    it(`"${data}" retourne ${JSON.stringify(expected)}`, () => {
      expect(proposalsAsBlocks(data)).to.deep.equal(expected);
    });
  });

});
