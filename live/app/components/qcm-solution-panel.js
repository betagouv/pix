import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';
import valueAsArrayOfBoolean from 'pix-live/utils/value-as-array-of-boolean';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';
import _ from 'pix-live/utils/lodash-custom';

function getType ( item ) {
    const objType = Object.prototype.toString.call(item);
    const match = objType.match( /^\[object\s(.*)\]$/ );
    return match[1].toLowerCase();
}

export default Ember.Component.extend({
  answer: null,
  solution: null,
  challenge: null,

  solutionArray: Ember.computed('solution', function () {

    const solution = this.get('solution');
    console.log(' - - - - solution ' + solution);
    console.log(' - - - - getType(solution) ' + getType(solution));
    console.log(' - - - - solution.get(_valueAsArrayOfBoolean) ' + solution.get('_valueAsArrayOfBoolean'));

    if (_.isNonEmptyString(solution)) {
      return solution.get('_valueAsArrayOfBoolean');
    }

    return [];

  }),

  labeledCheckboxes: Ember.computed('answer', function () {
    // if (_.isNonEmptyString(this.get('answer'))) {
    //   console.log(' - - - - this.get(answer) ' + this.get('answer'));
    // console.log(' - - - - this.get(challenge) ' + this.get('challenge'));
    // console.log(' - - - - this.get(challenge.proposals) ' + this.get('challenge.proposals'));

    // console.log(' - - - - this.get(answerVal) ' + this.get('answer.value'));
    console.log(' - - - - this.get(ch_propasarray) ' + this.get('challenge').get('_proposalsAsArray'));
    console.log(' - - - - this.get(answer_valueAsArrayOfBoolean) ' + this.get('answer').get('_valueAsArrayOfBoolean'));

    const proposals =  this.get('challenge.proposals');
    console.log('getType(proposals)- - - - - - - - - - - - - - - - - - - - ', getType(proposals));
    console.log('proposals- - - - - - - - - - - - - - - - - - - - ', proposals);
    console.log(' ');

    const proposalsArray =  proposalsAsArray(proposals);
    console.log('getType(proposalsArray)- - - - - - - - - - - - - - - - - - - - ', getType(proposalsArray));
    console.log('proposalsArray- - - - - - - - - - - - - - - - - - - - ', proposalsArray);
    console.log(' ');

    const answer = this.get('answer');
    console.log('getType(answer)- - - - - - - - - - - - - - - - - - - - ', getType(answer));
    console.log('answer- - - - - - - - - - - - - - - - - - - - ', answer);
    console.log(' ');

    const answerArray = valueAsArrayOfBoolean(answer);
    console.log('getType(answerArray)- - - - - - - - - - - - - - - - - - - - ', getType(answerArray));
    console.log('answerArray- - - - - - - - - - - - - - - - - - - - ', answerArray);
    console.log(' ');

    const checkboxes = labeledCheckboxes(proposalsArray, answerArray);
    console.log('getType(checkboxes)- - - - - - - - - - - - - - - - - - - - ', getType(checkboxes));
    console.log('checkboxes- - - - - - - - - - - - - - - - - - - - ', checkboxes);
    console.log(' ');

    return checkboxes;
      // return labeledCheckboxes(proposalsAsArray(this.get('challenge.proposals')), valueAsArrayOfBoolean(this.get('answer')));
    // }
    // return [];
  }),
});
