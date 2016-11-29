import Ember from 'ember';
import _ from 'lodash/lodash';


// function formattedProposals(proposals) {
//   const tempProposals = '\n' + proposals;
//   let elements = tempProposals.split(/\n\s*-\s*/);
//   elements.shift();
//   return elements;
// }

function formattedAnswers(answers) {
  let result = [];
  if (isString(answers) && answers.length > 0) {
    result = answers.split(',');
    result = _.map(result, (item, index) => {
      return item - 1;
    })
  }
  return result;
}

export default Ember.Component.extend({


  labeledCheckboxes: Ember.computed('proposals', 'answers', function() {
    // console.log('hey labeledCheckboxes');

    // let result = [];

    // _.each(this.get('proposals'), (proposal, index) => {
    //   result.unshift(proposal);
    // });

    let result = [];

    result = _.zip(this.get('proposals'), this.get('answers'))

    // result.push(['aze', true]);
    // result.push(['rze', true]);
    // result.push(['cze', false]);
    // result.push(['dze', true]);

    // let formattedProposals = formattedProposals(this.get('proposals'));
    // let formattedAnswers = this.get('answers');

    // // console.log(typeof formattedAnswers);
    // // console.log(formattedAnswers.length);
    // // console.log(formattedAnswers);

    // _.each(formattedProposals, (proposal, index) => {
    //   console.log(index + '£££' + proposal);
    //   // if (_.contains(formattedAnswers, index + 1) {
    //   //   console.log('true');
    //   // } else {
    //   //   console.log('false');
    //   // });
    // });
    return result;
  }),
  
  answersDidChange: Ember.on('init', Ember.observer('answers', function() {
    // some side effect of salutation changing
    console.log('answers changed to ' + JSON.stringify(this.get('answers')));
  })),

  //   answersDidChange: Ember.observer('answers', function() {
  //   // some side effect of salutation changing
  //   console.log('answers changed to ' + JSON.stringify(this.get('answers')));
  // }),
});
