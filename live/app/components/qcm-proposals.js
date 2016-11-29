import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Component.extend({

  tagName: 'div',

  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {

    let result = [];

    result = _.zip(this.get('proposals'), this.get('answers'));
    return result;
  }),

  // fires when any of the checkbox is clicked
  click: function () {

    // if two first checkboxes are checked, it returns "1,2"
    let updatedAnswer = this.$('input:checkbox:checked').map(function () {
      return this.name;
    }).get().join(',');

    console.log('click ' + updatedAnswer);
    this.sendAction('onAnswerUpdated', updatedAnswer);

  }

});
