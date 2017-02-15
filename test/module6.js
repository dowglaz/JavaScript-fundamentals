var expect = require('chai').expect;
var module6 = require('./cheat')('module6');

describe('Module6/Exercise1', function () {
  var fn = module6.exercise1;

  it('Should throw a generic Error', function () {
    expect(fn).to.throw(Error);
  });
});

describe('Module6/Exercise2', function () {
  var exercise2 = module6.exercise2;
  var fn = module6.exercise2.fn;

  it('Should have a function which throws an error', function () {
    expect(fn).to.throw(Error);
  });

  it('Should catch this error', function () {
    expect(exercise2).to.not.throw();
    expect(exercise2()).to.be.eq('Error handled');
  });
});

describe('Module6/Exercise3', function () {
  var exercise3 = module6.exercise3;

  var genericErrorHandler = exercise3.genericErrorHandler;
  var typeErrorHandler = exercise3.typeErrorHandler;
  var referenceErrorHandler = exercise3.referenceErrorHandler;
  var customErrorHandler = exercise3.customErrorHandler;

  var handleGenericError = exercise3.handleGenericError;
  var handleTypeError = exercise3.handleTypeError;
  var handleReferenceError = exercise3.handleReferenceError;
  var handleCustomError = exercise3.handleCustomError;

  var throwError = exercise3.throwError;
  var CustomError = exercise3.CustomError;

  it('Should have a generic error handler', function () {
    expect(genericErrorHandler()).to.be.eq('Generic Error handled');
  });

  it('Should have a type error handler', function () {
    expect(typeErrorHandler()).to.be.eq('Type Error handled');
  });

  it('Should have a reference error handler', function () {
    expect(referenceErrorHandler()).to.be.eq('Reference Error handled');
  });

  it('Should have a custom error handler', function () {
    expect(customErrorHandler()).to.be.eq('Custom Error handled');
  });

  it('Should throw Error', function () {
    try {
      throwError(0);
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error);
    }
  });

  it('Should throw TypeError', function () {
    try {
      throwError(1);
    } catch (e) {
      expect(e).to.be.an.instanceOf(TypeError);
    }
  });

  it('Should throw ReferenceError', function () {
    try {
      throwError(2);
    } catch (e) {
      expect(e).to.be.an.instanceOf(ReferenceError);
    }
  });

  it('Should throw CustomError', function () {
    try {
      throwError(3);
    } catch (e) {
      expect(e).to.be.a('string');
    }
  });

  it('Handles GenericError', function () {
    expect(handleGenericError).not.to.throw(Error);
  });

  it('Handles TypeError', function () {
    expect(handleTypeError).not.to.throw(TypeError);
  });

  it('Handles ReferenceError', function () {
    expect(handleReferenceError).not.to.throw(ReferenceError);
  });

  it('Handles CustomError', function () {
    expect(handleCustomError).not.to.throw();
  });

  it('Should catch all errors', function () {
    expect(exercise3).not.to.throw();
  });
});



