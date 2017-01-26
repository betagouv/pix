import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';

export default Ember.Component.extend({

  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {
    console.log('solution- - - - - - - - - - - - - - - - - - - - ', this.get('solution').get('value'));
    return labeledCheckboxes(this.get('challenge').get('_proposalsAsArray'), this.get('answer').get('_valueAsArrayOfBoolean'));
  }),

});
