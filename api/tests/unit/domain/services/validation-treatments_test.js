const { describe, it, expect } = require('../../../test-helper');
const { t1, t2 } = require('../../../../lib/domain/services/validation-treatments');

describe('Unit | Service | Validation Treatments', function () {


  describe('#t1', function () {
    [
      { description: 'white spaces', input: '  foo  bar  ', expected: 'foobar' },
      { description: 'unbreakable spaces', input: 'unbreakable spaces', expected: 'unbreakablespaces' },
      { description: 'accents', input: 'àâäéèêëîïôöòûùüñń', expected: 'aaaeeeeiiooouuunn' },
      { description: 'cédille', input: 'hameçon', expected: 'hamecon' },
      { description: 'casse', input: 'SHI-fu-Mi', expected: 'shi-fu-mi' }
    ].forEach((scenario) => {
      it(`should return the given string without "${scenario.description}"`, function () {
        expect(t1(scenario.input)).to.equal(scenario.expected);
      });
    });

    it('should not modify æ and œ', function () {
      expect(t1('æ/œ')).to.equal('æ/œ');
    });
  });

  describe('#t2', function () {
    [
      { description: 'all point types', input: '?Allo?,:;.', expected: 'Allo' },
      { description: 'slashs', input: '\\o/', expected: 'o' },
      { description: 'quotes', input: '"quotes"', expected: 'quotes' },
      { description: 'underscore and dashes', input: 'Shi-fu_mi', expected: 'Shifumi' },
      { description: 'parenthesis', input: '(anyway)', expected: 'anyway' }
    ].forEach((scenario) => {
      it(`should return the given string without "${scenario.description}"`, function () {
        expect(t2(scenario.input)).to.equal(scenario.expected);
      });
    });

  });
});
