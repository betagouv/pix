import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Component.extend({

  tagName: 'div',

  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {
    let result = [];
    result = _.zip(this.get('proposals'), this.get('answers'));
    return result;
  }),

  actions: {
    checkboxClicked: function() {
      this.sendAction('answerChanged');
    }
  }

});
