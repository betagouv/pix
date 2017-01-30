import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';

export default Ember.Component.extend({

  // answer comes from declaration
  // challenge comes from declaration
  // solution comes from declaration

  solutionArray: Ember.computed('solution', function() {
    return this.get('solution').get('_valueAsArrayOfBoolean');
  }),

  labeledCheckboxes: Ember.computed('answer', function() {

    /* eslint-disable no-alert, no-console */
    console.log('solution- - - - - - - - - - - - - - - - - - - - ', this.get('solution').get('_valueAsArrayOfBoolean'));
    /* eslint-enable no-alert, no-console */
    return labeledCheckboxes(this.get('challenge').get('_proposalsAsArray'), this.get('answer').get('_valueAsArrayOfBoolean'));
  }),

});
