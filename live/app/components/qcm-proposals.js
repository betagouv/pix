import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Component.extend({

  tagName: 'div',

  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {

    let result = [];

    result = _.zip(this.get('proposals'), this.get('answers'));
    return result;
  }),

  answerChanged () {
    // If two first checkboxes are checked, and others are unchecked, updatedAnswer will be string "1,2"
    let updatedAnswer = this.$('input:checkbox:checked').map(function () {return this.name;}).get().join(',');
    this.sendAction('onAnswerUpdated', updatedAnswer);
  },

  didInsertElement () {
    this._super(...arguments);
    this.answerChanged();
  },

  // fires when any of the checkbox is clicked
  click: function () {
    this.answerChanged();
  }

});
