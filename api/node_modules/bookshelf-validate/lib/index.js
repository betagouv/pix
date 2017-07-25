const validator = require('validator');
const ValidationError = require('./errors').ValidationError;

const defaultConfig = {
  validator,
  validateOnSave: false,
};

function doValidation(validatorObj, fnName, value, args) {
  if (value === null || typeof value === 'undefined') {
    if (fnName === 'isRequired') {
      return false;
    }

    return true;
  }

  // No args should default to boolean true
  if (typeof args === 'undefined') args = true;

  // The argument can be a boolean for argumentless validation, a single
  // argumentor object, or an array of argument values
  if (typeof args === 'boolean') {
    return validatorObj[fnName](value) === args;
  }

  if (!Array.isArray(args)) {
    return validatorObj[fnName](value, args);
  }

  /* eslint prefer-rest-params: "off" */
  return validatorObj[fnName].apply(validatorObj, Array.from(arguments).slice(2));
}

function validationPlugin(bookshelf, userConfig) {
  const config = Object.assign({}, defaultConfig, userConfig);

  const Plugin = {
    validationErrors() {
      const output = {};

      function addError(propName, errorName) {
        const propertyErrors = output[propName] || [];

        propertyErrors.push(errorName);
        output[propName] = propertyErrors;
      }

      function validateAttribute(propName, propValue, options) {
        let isValid;

        if (Array.isArray(options)) {
          // Recurse each element of array
          for (const option of options) {
            validateAttribute(propName, propValue, option);
          }
        } else if (typeof options === 'string') {
          // Single string validator, i.e., isRequired
          isValid = doValidation(config.validator, options, propValue);

          if (!isValid) addError(propName, options);
        } else if (options.hasOwnProperty('method')) {
          // API v2 style options object
          const fnName = options.method;
          const args = options.args;
          const error = options.error;
          isValid = doValidation(config.validator, fnName, propValue, args);

          if (!isValid) addError(propName, error || fnName);
        } else {
          // Object where each key is a validator method name
          for (const fnName of Object.keys(options)) {
            if (options.hasOwnProperty(fnName)) {
              const args = options[fnName];
              isValid = doValidation(config.validator, fnName, propValue, args);

              if (!isValid) addError(propName, fnName);
            }
          }
        }
      }

      // Validate each property with the given rule arguments
      for (const propName in this.validations) {
        if (this.validations.hasOwnProperty(propName)) {
          const propValue = this.get(propName);
          const validations = this.validations[propName];
          validateAttribute(propName, propValue, validations);
        }
      }

      // Return null if every property is valid
      return Object.keys(output).length > 0 ? output : null;
    },
  };

  if (config.validateOnSave) {
    Plugin.initialize = function initialize() {
      if (typeof this.validateOnSave === 'function') {
        this.on('saving', this.validateOnSave);
      }
    };

    Plugin.validateOnSave = function validateOnSave() {
      const errors = this.validationErrors();

      if (!errors) return null;
      throw new ValidationError(errors);
    };
  }

  /* eslint no-param-reassign: "off" */
  bookshelf.Model = bookshelf.Model.extend(Plugin);
}

module.exports = validationPlugin;
