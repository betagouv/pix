import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';

const ComparisonWindow = Ember.Component.extend({

  answer: null,
  challenge: null,
  solution: null,
  index: null,

  isAssessmentChallengeTypeQroc: Ember.computed.equal('challenge.type', 'QROC'),
  isAssessmentChallengeTypeQCM: Ember.computed.equal('challenge.type', 'QCM'),
  isAssessmentChallengeTypeQrocmInd: Ember.computed.equal('challenge.type', 'QROCM-ind'),
  isAssessmentChallengeTypeQrocmDep: Ember.computed.equal('challenge.type', 'QROCM-dep'),

  solutionArray: Ember.computed('solution', function() {
    return this.get('solution').get('_valueAsArrayOfBoolean');
  }),

  labeledCheckboxes: Ember.computed('answer', function() {
    return labeledCheckboxes(this.get('challenge').get('_proposalsAsArray'), this.get('answer').get('_valueAsArrayOfBoolean'));
  })

});

ComparisonWindow.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default ComparisonWindow;
