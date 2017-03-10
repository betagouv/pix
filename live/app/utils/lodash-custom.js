/* global _ */

_.mixin({

  // Simple alias for includes, last arg fromIndex excluded.
  // Therefore, no test on this function.
  /* istanbul ignore next */
  isAmongst: function (element, collection) {
    return _.includes(collection, element);
  },
  forceString: function (x) {
    if (_(x).isNonEmptyString()) {
      return x;
    } else {
      return '';
    }
  },
  // See http://stackoverflow.com/a/10834843
  /* istanbul ignore next */
  isStrictlyPositiveInteger: function (str) {
    return /^\+?[1-9]\d*$/.test(str);
  },
  // Just an alias, ignore test
  /* istanbul ignore next */
  checkPoint: _.thru,
  isTrue: function (x) {
    return x === true;
  },
  removeFirstElement: function (x) {
    return _.drop(x, 1);
  },
  isArrayOfString: function (x) {
    return _.isArray(x) && _.every(x, _.isString);
  },
  isNotString: function (x) {
    return !_.isString(x);
  },
  isNotArrayOfString: function (x) {
    return !_.isArrayOfString(x);
  },
  isNotArray: function (x) {
    return !_.isArray(x);
  },
  isArrayOfBoolean: function (x) {
    return _.isArray(x) && _.every(x, _.isBoolean);
  },
  isNotArrayOfBoolean: function (x) {
    return !_.isArrayOfBoolean(x);
  },
  isTruthy: function (x) {
    return x !== false                     // not the boolean false
      && x !== 0                           // not the number 0
      && x !== undefined                   // not an undefined value
      && x !== null                        // not a null value
      && x !== ''                          // not an empty string
      && !(_.isNaN(x))                         // not a NaN
      && !(_.isArray(x) && _.isEmpty(x))   // not an empty array
      && !(_.isObject(x) && _.isEmpty(x)); // not an empty object
    },
  // Not enough value to test a one line function, mainly an alias here.
  /* istanbul ignore next */
  isFalsy: function (x) {
    return !_.isTruthy(x);
  },
  isNonEmptyString: function (x) {
    return _.isString(x) && !_.isEmpty(x);
  },
  isNonEmptyArray: function (x) {
    return _.isArray(x) && !_.isEmpty(x);
  },
  hasSomeTruthyProps: function (x) {
    if (!_.isObject(x)) return false;
    if (_.isEmpty(x)) return false;
    return _.some(x, function (value) {
      return _.isTruthy(value);
    });
  },

  isNotInteger: function (x) {
    return !_.isInteger(x);
  },

  // See http://veerasundar.com/blog/2013/01/underscore-js-and-guid-function/
  guid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  },
  getType: function ( item ) {
    const objType = Object.prototype.toString.call( item );

    const match = objType.match( /^\[object\s(.*)\]$/ );

    return match[1].toLowerCase();
  },
  getTypeof: function ( value, inspect, returnTypes, flaggedVals ) {
    // String representations of the value types (Overridden by returnTypes if defined)
    const types = _.extend( {
      undefined:  'undefined',
      null:       'null',
      string:     'string',
      boolean:    'boolean',
      array:      'array',
      element:    'element',
      date:       'date',
      regexp:     'regexp',
      object:     'object',
      number:     'number',
      funct:   'function',
      unknown:    'unknown'
    }, returnTypes || {} );

    // Flagged values for string variables; EG: if string is 'true', then the it's Boolean (Overridden by
    // flaggedVals if defined)
    const flagged = _.extend( {
      boolean:    [ 'true', 'false' ],
      null:       [ 'null', 'NULL' ],
      undefined:  [ 'undefined' ]
    }, flaggedVals || {} );


    // Retrieve the actual object type from the prototype
    //const objType = Object.prototype.toString.call( value )

    // Attempt to regex match the type (value should be [object TYPE]
    //const objTypeRegex = objType.match( /^\[object\s(.*)\]$/ )

    /* $lab:coverage:off$ */
    // Match the type, or use the types.undefined (This shouldn't ever not match)
    //const objTypeString = objTypeRegex[1] ? objTypeRegex[1].toLowerCase() : types.unknown
    /* $lab:coverage:on$ */

    if ( _.isUndefined( value ) ){
      return types.undefined;
    }

    if ( _.isNull( value ) ){
      return types.null;
    }

    // String values are what get opened to scrutiny, if enabled
    if ( _.isString( value ) ){
      // If inspect isnt enabled, then just return string;
      if ( !! inspect === false ){
        return types.string;
      }

      // Numbers should be the same value if leniently compared against it's float-parsed self
      if ( Number( value ) == value ){
        return types.number;
      }

      // Check if this string is inside the boolean flags
      if ( _.indexOf( flagged.boolean, value ) !== -1 ){
        return types.boolean;
      }

      // Check if its inside any null flags
      if (  _.indexOf( flagged.null, value ) !== -1 ){
        return types.null;
      }

      // Check if its inside any undefined flags
      if ( _.indexOf( flagged.undefined, value ) !== -1 ){
        return types.undefined;
      }

      // If no parser caught it, then it must be a string
      return types.string;
    }

    // Certain check types can't be misconstrued as other types, unlike other types (such as objects), get those out
    // of the way
    if ( _.isBoolean( value ) ){
      return types.boolean;
    }

    if ( _.isNumber( value ) ){
      return types.number;
    }

    if ( _.isDate( value ) ){
      return types.date;
    }

    if ( _.isRegExp( value ) ){
      return types.regexp;
    }

    /* $lab:coverage:off$ */
    // Disabling coverage for this, since unit testing is done via node
    if ( _.isElement( value ) ){
      return types.element;
    }
    /* $lab:coverage:on$ */

    // Since isObject returns true for functions, check this before that
    if ( _.isFunction( value ) ){
      return types.funct;
    }

    // Since isObject also returns true for arrays, check that before as well
    if ( _.isArray( value ) ){
      return types.array;
    }

    // isObject should be last for any possible object 'types'
    if ( _.isObject( value ) ){
      return types.object;
    }

    /* $lab:coverage:off$ */
    // If nothing else was caught, then return the type found via the prototypes toString() call
    // Note: Disabling coverage, since I can't find a value to reach this, and it's just in case I missed something.
    // It helps me sleep at night
    return this.getType( value );
    /* $lab:coverage:on$ */
  }
}, {chain: false});

export default _;
