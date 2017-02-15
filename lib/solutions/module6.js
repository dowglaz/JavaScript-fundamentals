module.exports.exercise1 = function () {
  throw new Error();
};

var fn = function () {
  throw new Error('Erro genérico');
};

module.exports.exercise2 = function exercise2() {
  try {
    fn();
  } catch (e) {
  }
  return 'Error handled';
};

module.exports.exercise2.fn = fn;

var genericErrorHandler = function () {
  return 'Generic Error handled';
};

var typeErrorHandler = function () {
  return 'Type Error handled';
};

var referenceErrorHandler = function () {
  return 'Reference Error handled';
};

var customErrorHandler = function () {
  return 'Custom Error handled';
};

var throwError = function throwError(type){
  var errorTypeEnum = {
    TypeError: 1,
    ReferenceError: 2,
    CustomError: 3
  };

  switch (type) {
  case errorTypeEnum.TypeError:
    throw new TypeError();
    break;
  case errorTypeEnum.ReferenceError:
    throw new ReferenceError();
    break;
  case errorTypeEnum.CustomError:
    throw 'myCustomError';
    break;
  default:
    throw new Error();
  }
};

var handleGenericError = function (next) {
  try {
    throwError(0);
  } catch (e) {
    genericErrorHandler(e);
  } finally {
    next();
  }
};

var handleTypeError = function (next) {
  try {
    throwError(errorTypeEnum.TypeError);
  } catch(e) {
    typeErrorHandler(e);
  } finally {
    next();
  }
};

var handleReferenceError = function (next) {
  try {
    throwError(errorTypeEnum.ReferenceError);
  } catch (e) {
    referenceErrorHandler(e);
  } finally {
    next();
  }
};

var handleCustomError = function (next) {
  try {
    throwError(errorTypeEnum.CustomError);
  } catch (e) {
    customErrorHandler(e);
  } finally {
    next();
  }
};

var noop = function () {};

module.exports.exercise3 = function () {
  // Prepares the chain
  handleCustomError = handleCustomError.bind(null, noop);
  handleReferenceError = handleReferenceError.bind(null, handleCustomError);
  handleTypeError = handleTypeError.bind(null, handleReferenceError);
  handleGenericError = handleGenericError.bind(null, handleTypeError);
  // Executes it
  handleCustomError();
};

module.exports.exercise3.genericErrorHandler = genericErrorHandler;
module.exports.exercise3.typeErrorHandler = typeErrorHandler;
module.exports.exercise3.referenceErrorHandler = referenceErrorHandler;
module.exports.exercise3.customErrorHandler = customErrorHandler;
module.exports.exercise3.throwError = throwError;
module.exports.exercise3.handleGenericError = handleGenericError.bind(null, noop);
module.exports.exercise3.handleTypeError = handleTypeError.bind(null, noop);
module.exports.exercise3.handleReferenceError = handleReferenceError.bind(null, noop);
module.exports.exercise3.handleCustomError = handleCustomError.bind(null, noop);

