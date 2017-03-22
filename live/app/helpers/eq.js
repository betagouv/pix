import Ember from 'ember';

export function eq(params/*, hash*/) {
  let isEqual = false;
  if (params && params[1]) {
    isEqual = (params[0] === params[1]) ? true : false;
  }
  return isEqual;
}

export default Ember.Helper.helper(eq);
