import Ember from 'ember';

export function stripInstruction(params/*, hash*/) {
  let result = $(params[0][0]).text();
  result = result.substr(0, 70);
  result += '...';
  console.log(JSON.stringify(result));
  return result;
}

export default Ember.Helper.helper(stripInstruction);
