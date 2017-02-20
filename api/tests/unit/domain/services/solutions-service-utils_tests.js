const { describe, it } = require('mocha');
const { expect } = require('chai');
const service = require('../../../../lib/domain/services/solution-service-utils');


describe('Unit | Domain | Services | solution-service-utils', function () {

  describe('#fuzzyMatchingWithAnswers', function () {

    const correctAnswersList = ['60 582 555', '60582555'];

    [
    { title: 'a string without space', value: '60582555' },
    { title: 'a string with spaces', value: '60 582 555' },
    { title: 'a string with not-breakable spaces', value: '60 582 555' },
    { title: 'a string with normal spaces and not-breakable spaces', value: '60 582 555  ' }
    ].forEach(userAnswer => {

      it(`should return true even when user answer is ${userAnswer.title}`, function () {
        const result = service.fuzzyMatchingWithAnswers(userAnswer.value, correctAnswersList);
        expect(result).to.be.true;
      });
    });

    [
    { title: 'a string with unexpected normal spaces beetween numbers', value: '6 0 582 555' },
    { title: 'when there is no answer', value: '' },
    { title: 'when it is not the right value', value: '1' },
    { title: 'when it is not a number', value: 'A' }
    ].forEach(userAnswer => {

      it(`should return true even when user answer is ${userAnswer.title}`, function () {
        const result = service.fuzzyMatchingWithAnswers(userAnswer.value, correctAnswersList);
        expect(result).to.be.false;
      });

    });

  });

  describe('treatmentT1', function() {
    it('Should exist', function () {
      expect(service.treatmentT1).to.exist;
    });
    it('Should return empty String if no input is given', function () {
      expect(service.treatmentT1()).to.equal('');
    });
    it('Should return empty String if wrong input is given, for example "new Date()"', function () {
      expect(service.treatmentT1(new Date())).to.equal('');
    });
    it('Should return the input if no treatment applies, for example "m" => "m"', function () {
      expect(service.treatmentT1('m')).to.equal('m');
    });
    it('Should remove accents & diacritics, for example "çrûlée" => "crulee"', function () {
      expect(service.treatmentT1('çrûlée')).to.equal('crulee');
    });
    it('Should remove uppercase, for example "BrûLée" => "brulee"', function () {
      expect(service.treatmentT1('brûlée')).to.equal('brulee');
    });
    it('Should remove space between, for example "Crème BrûLée" => "cremebrulee"', function () {
      expect(service.treatmentT1('Crème BrûLée')).to.equal('cremebrulee');
    });
    it('Should remove leading and trailing spaces, for example " Crème BrûLée  "=> "cremebrulee"', function () {
      expect(service.treatmentT1('Crème BrûLée')).to.equal('cremebrulee');
    });
  });

  describe('treatmentT2', function() {
    it('Should exist', function () {
      expect(service.treatmentT2).to.exist;
    });
    it('Should return empty String if no input is given', function () {
      expect(service.treatmentT2()).to.equal('');
    });
    it('Should return empty String if wrong input is given, for example "new Date()"', function () {
      expect(service.treatmentT2(new Date())).to.equal('');
    });
    it('Should remove all punctation from String, example "Th!!is., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation" => "This is an example of a string with punctuation"', function () {
      expect(service.treatmentT2('Th!!is., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation')).to.equal('This is an example of a string with punctuation');
    });
  });

  describe('treatmentT3', function() {
    it('Should exist', function () {
      expect(service.treatmentT3).to.exist;
    });
    it('Should return null if no input is given', function () {
      expect(service.treatmentT3()).to.equal(null);
    });
    it('Should return null if wrong input is given, for example "new Date(), new Date()"', function () {
      expect(service.treatmentT3(new Date(), new Date())).to.equal(null);
    });
    it('Should return the ratio levenshtein / userAnswer.length', function () {
      expect(service.treatmentT3('a1', ['a1'])).to.equal(0);
      expect(service.treatmentT3('a1', ['a1', 'a2', 'a3'])).to.equal(0);
      expect(service.treatmentT3('abbbbbbbbb', ['bbbbbbbbbb'])).to.equal(0.1);
      expect(service.treatmentT3('quack', ['quacks', 'azertyqwerk'])).to.equal(0.2);
      expect(service.treatmentT3('book', ['back', 'buck'])).to.equal(0.5);
      expect(service.treatmentT3('a', ['bbbbbbbbbb'])).to.equal(10);
    });
  });

  describe('smallestLevenshteinDistance', function() {
    it('Should exist', function () {
      expect(service.smallestLevenshteinDistance).to.exist;
    });
    it('Should return levenshtein distance if only one adminAnswer is given', function () {
      expect(service.smallestLevenshteinDistance('', [''])).to.equal(0);
      expect(service.smallestLevenshteinDistance('a', ['a'])).to.equal(0);
      expect(service.smallestLevenshteinDistance('a', ['ab'])).to.equal(1);
      expect(service.smallestLevenshteinDistance('book', ['back'])).to.equal(2);
    });
    it('Should return the smallest levenshtein distance if many adminAnswers are given', function () {
      expect(service.smallestLevenshteinDistance('', ['', 'a'])).to.equal(0);
      expect(service.smallestLevenshteinDistance('a', ['a', 'ab'])).to.equal(0);
      expect(service.smallestLevenshteinDistance('a', ['ab', 'abdcef'])).to.equal(1);
      expect(service.smallestLevenshteinDistance('a', ['abcdef', 'ab'])).to.equal(1);
      expect(service.smallestLevenshteinDistance('a', ['abcdef', 'ab', 'azerty'])).to.equal(1);
      expect(service.smallestLevenshteinDistance('book', ['back', 'buck'])).to.equal(2);
    });
  });

});
