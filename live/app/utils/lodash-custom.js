/* global _ */

_.mixin({

  // Simple alias for includes, last arg fromIndex excluded.
  // Therefore, no test on this function.
  /* istanbul ignore next */
  isAmongst: function(element, collection) {
    return _.includes(collection, element);
  },
  isTruthy: function(x) {
    return x !== false
      && x !== 0
      && x !== undefined
      && x !== null
      && x !== ''
      && !(_.isArray(x) && _.isEmpty(x)) // not an empty array
      && !(_.isObject(x) && _.isEmpty(x)); // not an empty object
  },
  // Not enough value to test a function which is just the opposite of a boolean function
  /* istanbul ignore next */
  not: function(x) {
    return !_.isTruthy(x);
  },
  hasSomeTruthyProps: function(x) {
    if (_.isEmpty(x)) return false;
    return _.some(x, function(value) {
      return _.isTruthy(value);
    });
  }
}, {chain: false});

export default _;
