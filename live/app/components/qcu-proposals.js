import Ember from 'ember';
import _ from 'lodash/lodash';

function _uncheckAllRadioButtons() {
  this.$(':radio').prop('checked', false);
}

function _checkAgainTheSelectedOption(index) {
  this.$(`:radio:nth(${index})`).prop('checked', true);
}

export default Ember.Component.extend({

  tagName: 'div',

  labeledRadios: Ember.computed('proposals', 'answers', function() {
    /*
    * First merge 2 proposals, proposals fix the length of the 2-dimensionals array,
    * Therefore, there might be value that are undefined
    *  - [['prop 1', false], ['prop 1', true], ['prop 1', undefined]]
    */
    let result = _.zip(this.get('proposals'), this.get('answers'));
    /*
    * Now convert null or undefined value into explicit boolean false value
    *  - [['prop 1', false], ['prop 1', true], ['prop 1', undefined]]
    */
    result = _.map(result, (item) => {
      if (item) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  }),

  actions: {
    radioClicked: function(index) {
      _uncheckAllRadioButtons.call(this);
      _checkAgainTheSelectedOption.call(this, index);
      this.sendAction('answerChanged');
    }
  }

});
