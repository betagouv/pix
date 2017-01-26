import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';

export default Ember.Component.extend({

  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {
    console.log('_proposalsAsArray- - - - - - - - - - - - - - - - - - - - ', this.get('challenge').get('_proposalsAsArray'));
    console.log('answer- - - - - - - - - - - - - - - - - - - - ', this.get('answer').get('id'));
    const result = labeledCheckboxes(this.get('challenge').get('_proposalsAsArray'), this.get('answer').get('_valueAsArrayOfBoolean'));
    console.log('result- - - - - - - - - - - - - - - - - - - - ', result);
    return result;
  }),

});
