/* eslint-disable */
/* global _ */
// import _ from 'lodash/lodash';


_.mixin({
  isTruthy: function(x) {return x !== false && x !== 0 && x !== undefined && x !== null  && x !== '' && !(_.isArray(x) && _.isEmpty(x)) && !(_.isObject(x) && _.isEmpty(x));},
  not: function(x) {return !_.isTruthy(x);},
  hasSomeTruthyProps: function(x) {
    if (_.isEmpty(x)) return false;
    return _.some( x, function(value, key) {
      return _.isTruthy(value);
    });
  }
},
{ 'chain': false })

export default _;
