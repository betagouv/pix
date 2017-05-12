import Ember from 'ember';

export default Ember.Component.extend({

  classNames : ['scoring-panel'],

  assessment: null,

  hasATrophy: Ember.computed.gt('assessment.estimatedLevel', 0),
  //hasATrophy: false,
  hasSomePix: Ember.computed.gt('assessment.pixScore', 0)
  //hasSomePix: true

});
