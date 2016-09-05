import Ember from 'ember';
import { describe, before } from 'mocha';
import { it } from 'ember-mocha';
import QROCChallenge from 'pix-live/models/challenge/qroc';

describe.skip('Unit | Model | Challenge/QR  OC', function () {

  describe('#proposalsAsBlocks', function () {

    const testData = [
      {data: 'Text', expected: [{text: 'Text'}]}
    ];

    const Challenge = Ember.Object.extend(QROCChallenge, {});

    testData.forEach(function ({ data, expected }) {

      it(`"${data.toString()}" retourne [${expected}]`, function () {
        const sut = Challenge.create({ proposal: data });
        expect(sut.get('proposalsAsBlocks')).to.deep.equals(expected);
      });
    });
  });
});

