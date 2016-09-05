import DS from 'ember-data';
import Ember from 'ember';

import QCMChallenge from './challenge/qcm';
import QCUChallenge from './challenge/qcu';

const { Model, attr } = DS;
const { computed } = Ember;

const ChallengeModel = Model.extend({

  instruction: attr('string'),
  proposals: attr('string'),
  illustrationUrl: attr('string'),

  toTypedChallenge() {
    this.beginPropertyChanges();
    let typedMixin = this._findTypedMixin();
    typedMixin.apply(this);
    this.endPropertyChanges();
  },

  _findTypedMixin() {
    switch (this.get('type')) {
      case 'QCM':
        return QCMChallenge;
      case 'QCU':
        return QCUChallenge;
      default:
        this.set('type', 'QCU');
        return QCUChallenge;
    }
  }
});

export default ChallengeModel;
