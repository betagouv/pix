const { describe, it, expect } = require('../../../test-helper');
const { t1, t2, applyPreTreatments, applyTreatments } = require('../../../../lib/domain/services/validation-treatments');

describe('Unit | Service | Validation Treatments', function () {

  /**
   * #t1(string)
   */

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

  /**
   * #t2(string)
   */

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

  /**
   * #applyPreTreatments(string)
   */

  describe('#applyPreTreatments', function () {

    it('should return a copy of the given string with unbreakable spaces replaced by normal spaces', () => {
      // given
      const stringWithUnbreakableSpaces= ' Shi Foo-Bar ';
      const sameStringWithNormalSpaces= ' Shi Foo-Bar ';

      // when
      const actual = applyPreTreatments(stringWithUnbreakableSpaces);

      // then
      expect(actual).to.equal(sameStringWithNormalSpaces);
    });
  });

  /**
   * #applyTreatments(string, enabledTreatments)
   */

  describe('#applyTreatments', () => {

    it('should return the given string without applying any treatment when the enabled treatments array is not defined', () => {
      // given
      const input = ' Shi Foo-Bar ';

      // when
      const actual = applyTreatments(input);

      // then
      expect(actual).to.equal(input);
    });

    it('should return the given string without applying any treatment when the enabled treatments array is empty', () => {
      // given
      const input = ' Shi Foo-Bar ';

      // when
      const actual = applyTreatments(input, []);

      // then
      expect(actual).to.equal(input);
    });

    it('should return the given string without applying any treatment when the enabled treatments array does not contain "t1" nor "t2"', () => {
      // given
      const input = ' Shi Foo-Bar ';

      // when
      const actual = applyTreatments(input, ['t1000']);

      // then
      expect(actual).to.equal(input);
    });

    it('should return a string with "t1" applied if it is set as enabled treatment', () => {
      // given
      const input = ' Shi Foo-Bar ';

      // when
      const actual = applyTreatments(input, ['t1']);

      // then
      expect(actual).to.equal('shifoo-bar');
    });

    it('should return a string with "t2" applied if it is set as enabled treatment', () => {
      // given
      const input = ' Shi Foo-Bar ';

      // when
      const actual = applyTreatments(input, ['t2']);

      // then
      expect(actual).to.equal(' Shi FooBar ');
    });
  });


});
