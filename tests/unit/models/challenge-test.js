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

        expect(qcmChallenge.toTypedChallenge()).to.be.an.instanceOf(QCMChallenge);
      });

      it('knows QCU', function () {
        const qcuChallenge = this.subject({
          type: 'QCU'
        });

        expect(qcuChallenge.toTypedChallenge()).to.be.an.instanceOf(QCUChallenge);
      });

      it("when it doesn't know the type, it choose QCU", function () {
        const unknonwChallengeType = this.subject({
          type: 'TaTaROC'
        });

        expect(unknonwChallengeType.toTypedChallenge()).to.be.an.instanceOf(QCUChallenge);
      })
    });
  }
);
