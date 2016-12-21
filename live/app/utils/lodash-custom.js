/* global _ */

_.mixin({

  // Simple alias for includes, last arg fromIndex excluded.
  // Therefore, no test on this function.
  /* istanbul ignore next */
  isAmongst: function(element, collection) {
    return _.includes(collection, element);
  },
  isTruthy: function(x) {
    return x !== false                     // not the boolean false
      && x !== 0                           // not the number 0
      && x !== undefined                   // not an undefined value
      && x !== null                        // not a null value
      && x !== ''                          // not an empty string
      && !(_.isArray(x) && _.isEmpty(x))   // not an empty array
      && !(_.isObject(x) && _.isEmpty(x)); // not an empty object
  },
  // Not enough value to test a one line function, mainly an alias here.
  /* istanbul ignore next */
  not: function(x) {
    return !_.isTruthy(x);
  },
  isNonEmptyString : function(x) {
    return _.isString(x) && !_.isEmpty(x);
  },
  hasSomeTruthyProps: function(x) {
    if (!_.isObject(x)) return false;
    if (_.isEmpty(x)) return false;
    return _.some(x, function(value) {
      return _.isTruthy(value);
    });
  }
}, {chain: false});

export default _;
