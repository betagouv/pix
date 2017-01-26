import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';

export default Ember.Component.extend({

  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {
    console.log('_proposalsAsArray- - - - - - - - - - - - - - - - - - - - ', this.get('challenge').get('_proposalsAsArray'));
    return labeledCheckboxes(this.get('challenge').get('_proposalsAsArray'), this.get('answers'));
  }),

});
