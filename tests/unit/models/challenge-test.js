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
  }
);
