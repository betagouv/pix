import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Component.extend({

  tagName: 'div',

  labeledRadios: Ember.computed('proposals', 'answers', function() {
    let result = [];
    result = _.zip(this.get('proposals'), this.get('answers'));
    return result;
  }),

  actions: {
    radioClicked: function(index) {
      //uncheck all radio buttons
      this.$(':radio').prop('checked', false);
      //check again the one that was checked
      this.$(`:radio:nth(${index})`).prop('checked', true);
      this.sendAction('answerChanged');
    }
  }

});
