import Ember from 'ember';
import _ from 'lodash/lodash';

export function propertyOf(params) {
  let map = params[0];
  let key = params[1];
  if (_.isObject(map) && _.isString(key)) {
    return map[key];
  }
  return '';
}

export default Ember.Helper.helper(propertyOf);
