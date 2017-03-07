import { expect } from 'chai';
import { describe, it } from 'mocha';
import _ from 'pix-live/utils/lodash-custom';

describe('Unit | Utility | lodash custom', function () {

  describe('#isNonEmptyString', function () {

    it('when no arg, returns false', function () {
      expect(_.isNonEmptyString()).to.equal(false);
    });

    [
    { value: undefined, expected: false },
    { value: null, expected: false },
    { value: new Date(), expected: false },
    { value: '', expected: false },
    { value: 'abcd', expected: true }
    ].forEach((item) => {
      it(`should return ${item.expected} when value is ${item.value}`, function () {
        expect(_.isNonEmptyString(item.value)).to.equal(item.expected);
      });
    });
  });

  describe('#isNotInteger', function () {

    it('when no arg, returns false', function () {
      expect(_.isNotInteger()).to.equal(true);
    });

    [
    { value: undefined, expected: true },
    { value: 'undefined', expected: true },
    { value: null, expected: true },
    { value: '', expected: true },
    { value: 'abcd', expected: true },
    { value: 0, expected: false },
    { value: 5, expected: false },
    { value: '5', expected: true }
    ].forEach((item) => {
      it(`should return ${item.expected} when value is ${item.value}`, function () {
        expect(_.isNotInteger(item.value)).to.equal(item.expected);
      });
    });
  });

  describe('#isTruthy', function () {

    it('when no arg, returns false', function () {
      expect(_.isTruthy()).to.equal(false);
    });

    [
    { value: undefined, expected: false },
    { value: null, expected: false },
    { value: true, expected: true },
    { value: false, expected: false },
    { value: 0, expected: false },
    { value: 1, expected: true },
    { value: [], expected: false },
    { value: [1, 2, 3], expected: true },
    { value: { a: 42 }, expected: true },
    { value: {}, expected: false },
    { value: '', expected: false },
    { value: 'foo', expected: true }
    ].forEach((item) => {
      it(`should return ${item.expected} when value is ${item.value}`, function () {
        expect(_.isTruthy(item.value)).to.equal(item.expected);
      });
    });
  });

  describe('#hasSomeTruthyProps', function () {

    it('when no arg, returns false', function () {
      expect(_.hasSomeTruthyProps()).to.equal(false);
    });

    [
    { value: undefined, expected: false },
    { value: null, expected: false },
    { value: 'azerty', expected: false },
    { value: {}, expected: false },
    { value: { a: '' }, expected: false },
    { value: { a: false }, expected: false },
    { value: { a: undefined }, expected: false },
    { value: { a: null }, expected: false },
    { value: { a: 0 }, expected: false },
    { value: { a: false }, expected: false },
    { value: { a: 42 }, expected: true },
    { value: { a: 42, b: false }, expected: true },
    { value: { a: '', b: false }, expected: false },
    { value: { a: 42, b: true }, expected: true }
    ].forEach((item) => {
      it(`should return ${item.expected} when value is ${item.value}`, function () {
        expect(_.hasSomeTruthyProps(item.value)).to.equal(item.expected);
      });
    });
  });

  describe('#isNumeric', function() {
    it('should return true if its already a number type', function() {
      expect(_.isNumeric(0)).to.be.true;
      expect(_.isNumeric(2)).to.be.true;
      expect(_.isNumeric(17)).to.be.true;
      expect(_.isNumeric(+17)).to.be.true;
      expect(_.isNumeric(-17)).to.be.true;
      expect(_.isNumeric(-0)).to.be.true;
      expect(_.isNumeric(.0)).to.be.true;
      expect(_.isNumeric(.17)).to.be.true;
      expect(_.isNumeric(-.17)).to.be.true;
      expect(_.isNumeric(1e17)).to.be.true;
      expect(_.isNumeric(1e-17)).to.be.true;
      expect(_.isNumeric(Infinity)).to.be.true;
      expect(_.isNumeric(-Infinity)).to.be.true;
      expect(_.isNumeric(new Number('123'))).to.be.true;
    });

    it('should return true if its a string that looks like a number', function() {
      expect(_.isNumeric(new String('1337'))).to.be.true;
      expect(_.isNumeric('1337')).to.be.true;
      expect(_.isNumeric('-1337')).to.be.true;
      expect(_.isNumeric('1337.17')).to.be.true;
      expect(_.isNumeric('-1337.17')).to.be.true;
      expect(_.isNumeric('0017')).to.be.true;
      expect(_.isNumeric('00000.017')).to.be.true;
    });

    it('should return false if its a string does not look like a number', function() {
      expect(_.isNumeric('abc')).to.be.false;
      expect(_.isNumeric('6qwerty0')).to.be.false;
      expect(_.isNumeric('17%')).to.be.false;
      expect(_.isNumeric('-17%')).to.be.false;
      expect(_.isNumeric('#17')).to.be.false;
      expect(_.isNumeric('2^18')).to.be.false;
      expect(_.isNumeric('17px')).to.be.false;
      expect(_.isNumeric('*')).to.be.false;
      expect(_.isNumeric('')).to.be.false;
      expect(_.isNumeric(true)).to.be.false;
      expect(_.isNumeric(false)).to.be.false;
      expect(_.isNumeric([])).to.be.false;
      expect(_.isNumeric({})).to.be.false;
      expect(_.isNumeric(function(){})).to.be.false;
      expect(_.isNumeric(undefined)).to.be.false;
      expect(_.isNumeric(null)).to.be.false;
    });
  });

});
