function ValidationError(errors) {
  this.data = errors;
  this.message = 'ValidationError';
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

exports.ValidationError = ValidationError;
