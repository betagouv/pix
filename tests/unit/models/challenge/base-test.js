import { describe, before } from 'mocha';
import { it } from 'ember-mocha';
import BaseChallenge from 'pix-live/models/challenge/base';

describe('Unit | Model | Challenge/Base', function () {

  describe('#init', function () {
    const Subclass = BaseChallenge.extend({ challengeType: 'Yo' });

    it('detect wrong instanciations', function () {
      expect(() => BaseChallenge.create()).to.throw(Error);
    });

    it('checks at instantiation the type of the challenge', function () {
      expect(() => Subclass.create({ content: { type: 'not Yo' } })).to.throw(Error);
    });

    it('can be instantiated only if types matches', function () {
      expect(() => Subclass.create({ content: { type: 'Yo' } })).to.not.throw(Error);
    });

    it('respects the original content of the wrapped object', function () {
      const challenge = {
        instruction: 'hello',
        proposals: '- yo\n - yoyo\n - yoyoyo',
        type: 'Yo'
      };
      const qcm = Subclass.create({ content: challenge });
      expect(qcm).to.be.ok;
      expect(qcm.get('instruction')).to.eq(challenge.instruction);
      expect(qcm.get('proposals')).to.eq(challenge.proposals);
    });
  });
});

