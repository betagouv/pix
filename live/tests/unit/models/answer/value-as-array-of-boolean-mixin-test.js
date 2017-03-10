import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import ValueAsArrayOfBooleanMixin from 'pix-live/models/answer/value-as-array-of-boolean-mixin';

describe.only('Unit | Model | Value As Array of Boolean Mixin', function () {

  const testData = [
    { when: 'Empty String', input: '', expected: [] },
    { when: 'Wrong type as input', input: new Date(), expected: [] },
    { when: 'Undefined input', input: undefined, expected: [] },
    { when: 'Nominal case', input: ',4, 2 , 2,1,  ,', expected: [true, true, false, true] },

    /*,{ input: 'foo', expected: [] },
    { input: '- foo', expected: ['foo'] },
    { input: '-foo\n- bar', expected: ['foo', 'bar'] },
    { input: '- cerf-volant', expected: ['cerf-volant'] },
    { input: '- xi\n- foo mi', expected: ['xi', 'foo mi'] },
    { input: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant'] },
    { input: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi'] },
    { input: '-- foo', expected: ['- foo'] },
    { input: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar'] }*/
  ];

  const Challenge = Ember.Object.extend(ValueAsArrayOfBooleanMixin, {});

  testData.forEach(({ when, input, expected }) => {

    it(`"${when}", example : "${JSON.stringify(input)}" retourne [${expected}]`, function () {
      const sut = Challenge.create({ value: input });
      expect(sut.get('_valueAsArrayOfBoolean')).to.deep.equal(expected);
    });
  });
});

