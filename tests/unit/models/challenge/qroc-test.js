import Ember from 'ember';
import { describe, before } from 'mocha';
import { it } from 'ember-mocha';
import QCMChallenge from 'pix-live/models/challenge/qcm';

describe.skip('Unit | Model | Challenge/QROC', function () {

  describe('#init', function () {
    it('detect wrong instanciations', function () {
      expect(() => QCMChallenge.create()).to.throw(Error);
    });

    it('can be instantiated with a correct challenge', function () {
      const challenge = {
        instruction: 'hello',
        proposals: '- yo\n - yoyo\n - yoyoyo',
        type: 'QCM'
      };
      const qcm = QCMChallenge.create({ content: challenge });
      expect(qcm).to.be.ok;
      expect(qcm.get('instruction')).to.eq(challenge.instruction);
      expect(qcm.get('proposals')).to.eq(challenge.proposals);
    });

    it('will raise an exception if instanciated with another type than QCM', function () {
      const challenge = {
        instruction: 'hello',
        proposals: '- yo\n - yoyo\n - yoyoyo',
        type: 'QCU'
      };

      expect(() => QCMChallenge.create({content: challenge })).to.throw(Error);
    })
  });
});

