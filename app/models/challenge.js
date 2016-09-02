import DS from 'ember-data';
import Ember from 'ember';

import QCMChallenge from './challenge/qcm';
import QCUChallenge from './challenge/qcu';

const { Model, attr, belongsTo } = DS;
const { computed } = Ember;

export default Model.extend({

  instruction: attr('string'),
  proposals: attr('string'),
  illustrationUrl: attr('string'),

  toTypedChallenge() {
    switch (this.get('type')) {
      case 'QCM':
        return QCMChallenge.create({ content: this });
      case 'QCU':
        return QCUChallenge.create({ content: this });
      default:
        this.set('type', 'QCU');
        return QCUChallenge.create({ content: this });
    }
  }
});
