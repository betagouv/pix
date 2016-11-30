import Ember from 'ember';

export function propertyOf(params) {
  let map = params[0];
  let key = params[1];
  return map[key];
}

export default Ember.Helper.helper(propertyOf);
