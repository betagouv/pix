import DS from 'ember-data';
import Ember from 'ember';

import QCMChallenge from './challenge/qcm';
import QCUChallenge from './challenge/qcu';
import QROCChallenge from './challenge/qroc';

const {Model, attr} = DS;
const {computed} = Ember;

const ChallengeModel = Model.extend(QCUChallenge, QCMChallenge, QROCChallenge,
  {
    instruction: attr('string'),
    proposals: attr('string'),
    illustrationUrl: attr('string'),
    type: attr('string')
  });

export default ChallengeModel;
