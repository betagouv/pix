const { describe, it } = require('mocha');
const { expect } = require('chai');
const service = require('../../../../lib/domain/services/solution-service-utils');


describe('Unit | Domain | Services | solution-service-utils', function () {



  describe('_treatmentT1', function() {
    it('Should exist', function () {
      expect(service._treatmentT1).to.exist;
    });
    it('Should return empty String if no input is given', function () {
      expect(service._treatmentT1()).to.equal('');
    });
    it('Should return empty String if wrong input is given, for example "new Date()"', function () {
      expect(service._treatmentT1(new Date())).to.equal('');
    });
    it('Should return the input if no treatment applies, for example "m" => "m"', function () {
      expect(service._treatmentT1('m')).to.equal('m');
    });
    it('Should remove accents & diacritics, for example "çrûlée" => "crulee"', function () {
      expect(service._treatmentT1('çrûlée')).to.equal('crulee');
    });
    it('Should remove uppercase, for example "BrûLée" => "brulee"', function () {
      expect(service._treatmentT1('brûlée')).to.equal('brulee');
    });
    it('Should remove space between, for example "Crème BrûLée" => "cremebrulee"', function () {
      expect(service._treatmentT1('Crème BrûLée')).to.equal('cremebrulee');
    });
    it('Should remove leading and trailing spaces, for example " Crème BrûLée  "=> "cremebrulee"', function () {
      expect(service._treatmentT1('Crème BrûLée')).to.equal('cremebrulee');
    });
  });

  describe('_treatmentT2', function() {
    it('Should exist', function () {
      expect(service._treatmentT2).to.exist;
    });
    it('Should return empty String if no input is given', function () {
      expect(service._treatmentT2()).to.equal('');
    });
    it('Should return empty String if wrong input is given, for example "new Date()"', function () {
      expect(service._treatmentT2(new Date())).to.equal('');
    });
    it('Should remove all punctation from String, example "Th!!is., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation" => "This is an example of a string with punctuation"', function () {
      expect(service._treatmentT2('Th!!is., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation')).to.equal('This is an example of a string with punctuation');
    });
  });

  describe('_treatmentT3', function() {
    it('Should exist', function () {
      expect(service._treatmentT3).to.exist;
    });
    it('Should return the ratio levenshtein / userAnswer.length', function () {
      expect(service._treatmentT3('a1', ['a1'])).to.equal(0);
      expect(service._treatmentT3('a1', ['a1', 'a2', 'a3'])).to.equal(0);
      expect(service._treatmentT3('abbbbbbbbb', ['bbbbbbbbbb'])).to.equal(0.1);
      expect(service._treatmentT3('quack', ['quacks', 'azertyqwerk'])).to.equal(0.2);
      expect(service._treatmentT3('book', ['back', 'buck'])).to.equal(0.5);
      expect(service._treatmentT3('a', ['bbbbbbbbbb'])).to.equal(10);
    });
  });

  describe('_smallestLevenshteinDistance', function() {
    it('Should exist', function () {
      expect(service._smallestLevenshteinDistance).to.exist;
    });
    it('Should return levenshtein distance if only one adminAnswer is given', function () {
      expect(service._smallestLevenshteinDistance('', [''])).to.equal(0);
      expect(service._smallestLevenshteinDistance('a', ['a'])).to.equal(0);
      expect(service._smallestLevenshteinDistance('a', ['ab'])).to.equal(1);
      expect(service._smallestLevenshteinDistance('book', ['back'])).to.equal(2);
    });
    it('Should return the smallest levenshtein distance if many adminAnswers are given', function () {
      expect(service._smallestLevenshteinDistance('', ['', 'a'])).to.equal(0);
      expect(service._smallestLevenshteinDistance('a', ['a', 'ab'])).to.equal(0);
      expect(service._smallestLevenshteinDistance('a', ['ab', 'abdcef'])).to.equal(1);
      expect(service._smallestLevenshteinDistance('a', ['abcdef', 'ab'])).to.equal(1);
      expect(service._smallestLevenshteinDistance('a', ['abcdef', 'ab', 'azerty'])).to.equal(1);
      expect(service._smallestLevenshteinDistance('book', ['back', 'buck'])).to.equal(2);
    });
  });

});
