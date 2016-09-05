import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import { describe } from "mocha";
import QCMChallenge from 'pix-live/models/challenge/qcm';
import QCUChallenge from 'pix-live/models/challenge/qcu';

describeModel(
  'challenge',
  'Unit | Model | Challenge',
  {
    needs: ['model:course']
  },
  function () {
    it('exists', function () {
      let model = this.subject();
      expect(model).to.be.ok;
    });

    describe('#toTypedChallenge', function () {
      it('knows QCM', function () {
        const qcmChallenge = this.subject({
          type: 'QCM'
        });
        qcmChallenge.toTypedChallenge();

        expect(qcmChallenge.challengeType).to.eq('QCM');
      });

      it('knows QCU', function () {
        const qcuChallenge = this.subject({
          type: 'QCU'
        });
        qcuChallenge.toTypedChallenge();

        expect(qcuChallenge.challengeType).to.eq('QCU');
      });

      it("when it doesn't know the type, it choose QCU", function () {
        const unknonwChallengeType = this.subject({
          type: 'TaTaROC'
        });
        unknonwChallengeType.toTypedChallenge();

        expect(unknonwChallengeType.challengeType).to.eq('QCU');
      });

      it('preserves the id', function () {
        const qcu = this.subject({
          id: 'recrecrec',
          type: 'QCU'
        });
        qcu.toTypedChallenge();

        expect(qcu.get('id')).to.equal(qcu.id);
      });
    });
  }
);
