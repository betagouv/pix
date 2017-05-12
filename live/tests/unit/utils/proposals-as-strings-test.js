import { expect } from 'chai';
import { describe, it } from 'mocha';
import proposalsAsStrings from 'pix-live/utils/proposals-as-strings';

describe('Unit | Utility | proposals as strings', function() {

  const testData = [
    { data: '', expected: [] },
    { data: 'foo', expected: [] },
    { data: '- foo', expected: ['foo'] },
    { data: '-foo\n- bar', expected: ['foo', 'bar'] },
    { data: '- cerf-volant', expected: ['cerf-volant'] },
    { data: '- xi\n- foo mi', expected: ['xi', 'foo mi'] },
    { data: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant'] },
    { data: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi'] },
    { data: '-- foo', expected: ['- foo'] },
    { data: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar'] }
  ];

  testData.forEach(({ data, expected }) => {

    it(`"${data.toString()}" retourne [${expected}]`, () => {
      expect(proposalsAsStrings(data)).to.deep.equal(expected);
    });
  });
});
