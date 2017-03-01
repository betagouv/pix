const { describe, it } = require('mocha');
const { expect } = require('chai');
const service = require('../../../../lib/domain/services/solution-service-utils');


describe('Unit | Domain | Services | solution-service-utils', function () {



  describe('_treatmentT1', function() {
    it('Should exist', function () {
      expect(service._treatmentT1).to.exist;
    });

    const successfulCases = [
      { should: 'Should return the input if no treatment applies', input: 'm', output: 'm' },
      { should: 'Should remove accents & diacritics', input: 'çrûlée', output: 'crulee' },
      { should: 'Should remove uppercase', input: 'BrûLée', output: 'brulee' },
      { should: 'Should remove single space between', input: 'Crème BrûLée', output: 'cremebrulee' },
      { should: 'Should replace double space between into one', input: 'Crème  BrûLée', output: 'cremebrulee' },
      { should: 'Should remove all consecutive spaces between into one', input: 'CrèmeBrûLée', output: 'cremebrulee' },
      { should: 'Should remove leading and trailing spaces', input: ' Crème BrûLée  ', output: 'cremebrulee' },
      { should: 'Should remove all spaces, even multiplied & repeated', input: ' Crème BrûLée   1   2  ', output: 'cremebrulee12' }
    ];

    successfulCases.forEach(function (testCase) {
      it(testCase.should + ', for example "' + testCase.input + '" => "' + testCase.output + '"', function () {
        expect(service._treatmentT1(testCase.input)).to.equal(testCase.output);
      });
    });

  });

  describe('_treatmentT2', function() {
    it('Should exist', function () {
      expect(service._treatmentT2).to.exist;
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

  describe('_getSmallestLevenshteinDistance', function() {
    it('Should exist', function () {
      expect(service._getSmallestLevenshteinDistance).to.exist;
    });
    it('Should return levenshtein distance if only one adminAnswer is given', function () {
      expect(service._getSmallestLevenshteinDistance('', [''])).to.equal(0);
      expect(service._getSmallestLevenshteinDistance('a', ['a'])).to.equal(0);
      expect(service._getSmallestLevenshteinDistance('a', ['ab'])).to.equal(1);
      expect(service._getSmallestLevenshteinDistance('book', ['back'])).to.equal(2);
    });
    it('Should return the smallest levenshtein distance if many adminAnswers are given', function () {
      expect(service._getSmallestLevenshteinDistance('', ['', 'a'])).to.equal(0);
      expect(service._getSmallestLevenshteinDistance('a', ['a', 'ab'])).to.equal(0);
      expect(service._getSmallestLevenshteinDistance('a', ['ab', 'abdcef'])).to.equal(1);
      expect(service._getSmallestLevenshteinDistance('a', ['abcdef', 'ab'])).to.equal(1);
      expect(service._getSmallestLevenshteinDistance('a', ['abcdef', 'ab', 'azerty'])).to.equal(1);
      expect(service._getSmallestLevenshteinDistance('book', ['back', 'buck'])).to.equal(2);
    });
  });

  describe('treatmentT1T2T3', function() {
    it('Should exist', function () {
      expect(service.treatmentT1T2T3).to.exist;
    });
    it('Should return null if adminAnswers is not an array of String', function () {
      expect(service.treatmentT1T2T3('quack', [new Date(), new Date()])).to.equal(null);
    });
    it('Should return t1 treatment', function () {
      expect(service.treatmentT1T2T3(' Crème BrûLée 1 ', ['any']).t1).to.equal('cremebrulee1');
    });
    it('Should return t2 treatment', function () {
      expect(service.treatmentT1T2T3('Th!!is.,', ['any']).t2).to.equal('This');
    });
    it('Should return t1 & t2 treatment', function () {
      expect(service.treatmentT1T2T3('Th!!is., is  Crème BrûLée 1 ', ['any']).t1t2).to.equal('thisiscremebrulee1');
    });
    it('Should return t3 ratio', function () {
      expect(service.treatmentT1T2T3('beck', ['back', 'book']).t3Ratio).to.equal(0.25);
    });
    it('Should return t3 ratio applied to t1', function () {
      expect(service.treatmentT1T2T3(' Béck ', ['back', 'book']).t1t3Ratio).to.equal(0.25);
    });
    it('Should return t3 ratio applied to t2', function () {
      expect(service.treatmentT1T2T3('th!!is.', ['that', 'those']).t2t3Ratio).to.equal(0.5);
    });
    it('Should return t3 ratio applied to t1 and t2', function () {
      expect(service.treatmentT1T2T3('éeE1', ['eee12', 'blabla']).t1t2t3Ratio).to.equal(0.25);
    });
  });


});
