import Ember from 'ember';
import { describe, before } from 'mocha';
import { it } from 'ember-mocha';
import QROCChallenge from 'pix-live/models/challenge/qroc';

describe('Unit | Model | Challenge/QROC', function () {

  describe('#proposalsAsBlocks', function () {

    const testData = [
      {data: '', expected: []},
      {data: 'Text', expected: [{text: 'Text'}]},
      {data: 'Text test plop', expected: [{text: 'Text test plop'}]},
      {data: '${qroc}', expected: [{input: 'qroc'}]},
      {data: 'Test: ${test}', expected: [{text: 'Test:'}, {input: 'test'}]},
      {data: 'Test: ${test} (kilometres)', expected: [{text: 'Test:'}, {input: 'test'}, {text: '(kilometres)'}]},
      {data: '${plop}, ${plop} ${plop}', expected: [{input: 'plop'}, {text: ','}, {input: 'plop'}, {input: 'plop'}]}
    ];

    const Challenge = Ember.Object.extend(QROCChallenge, {});

    testData.forEach(function ({ data, expected }) {

      it(`"${data.toString()}" retourne ${JSON.stringify(expected)}`, function () {
        const sut = Challenge.create({ proposals: data });
        expect(sut.get('_QROC_proposalsAsBlocks')).to.deep.equals(expected);
      });
    });
  });
});

