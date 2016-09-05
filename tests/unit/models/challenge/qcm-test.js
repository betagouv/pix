import { describe, before } from 'mocha';
import { it } from 'ember-mocha';
import QCMChallenge from 'pix-live/models/challenge/qcm';

describe('Unit | Model | Challenge/QCM', function () {

  describe('#proposalsAsArray', function () {

    const testData = [
      {data: '', expected: []},
      {data: 'foo', expected: []},
      {data: '- foo', expected: ['foo']},
      {data: '-foo\n- bar', expected: ['foo', 'bar']},
      {data: '- cerf-volant', expected: ['cerf-volant']},
      {data: '- xi\n- foo mi', expected: ['xi', 'foo mi']},
      {data: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant']},
      {data: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi']},
      {data: '-- foo', expected: ['- foo']},
      {data: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar']}
    ];

    Challenge = Ember.Object.extend(QCMChallenge, {});

    testData.forEach(({ data, expected }) => {
      it(`"${data.toString()}" retourne [${expected}]`, function() {
        const sut = Challenge.create({ proposals: data });
        expect(sut.get('proposalsAsArray')).to.deep.equal(expected);
      });
    });
  });
});

