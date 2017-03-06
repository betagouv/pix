import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Component | qrocm-solution-panel', function () {

  setupTest('component:qrocm-ind-solution-panel', {});

  describe('#labelsInArray', function () {

    it('should return the labels of input in an array', function () {
      //given
      const challenge = {
        proposals: 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}\n\nDisque dur externe : ${num3}\n\nCD-R / DVD-R : ${num4}'
      };
      const expectedResult = ['Clé USB : ', 'Carte mémoire (SD) : ', 'Disque dur externe : ', 'CD-R / DVD-R : '];
      const component = this.subject();
      component.set('challenge', challenge);
      //when
      const labelsAsArray = component.get('labelsInArray');
      //then
      expect(labelsAsArray).to.be.deep.equal(expectedResult);
    });

    it('should return the labels of input in an array even if there is line jump at the end', function () {
      //given
      const challenge = {
        proposals: 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}\n\n'
      };
      const expectedResult = ['Clé USB : ', 'Carte mémoire (SD) : '];
      const component = this.subject();
      component.set('challenge', challenge);
      //when
      const labelsAsArray = component.get('labelsInArray');
      //then
      expect(labelsAsArray).to.be.deep.equal(expectedResult);
    });

    it('should return an array with empty label, if there is no proposal in challenge object', function () {
      //given
      const challenge = {
        proposals: ''
      };
      const expectedResult = [];
      const component = this.subject();
      component.set('challenge', challenge);
      //when
      const labelsAsArray = component.get('labelsInArray');
      //then
      expect(labelsAsArray).to.be.deep.equal(expectedResult);
    });

  });

  describe('#dataToDisplay', function () {

    it('should return an array with data to display (case when the answers are right)', function () {
      const challenge = {
        proposals: 'content : ${smiley1}\n\ntriste : ${smiley2}'
      };
      const answer = {
        value: 'smiley1: \':)\' smiley2: \':(\''
      };
      const solution = {
        value: 'smiley1:\n- :-)\n- :)\n- :-D\n- :D\n- :))\n\nsmiley2:\n- :-(\n- :(\n- :(('
      };

      const component = this.subject();
      component.set('challenge', challenge);
      component.set('answer', answer);
      component.set('solution', solution);
      const dataToDisplay = component.get('dataToDisplay');

      const result = [{'label': 'content', 'answer':':)', 'solution': [':-)', ':)', ':-D', ':D', ':))'], 'rightAnswer' : true },
        {'label': 'triste', 'answer':':(', 'solution': [':-(', ':(', ':(('], 'rightAnswer': true}];

      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it('should return an array with data to display (case when there is wrong answers)', function () {
      //Given
      const challenge = {
        proposals: 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}'
      };
      const answer = {
        value: 'num1: \'1\' num2: \'2\''
      };
      const solution = {
        value: 'num1:\n- 2\nnum2:\n- 1'
      };

      const component = this.subject();
      component.set('challenge', challenge);
      component.set('answer', answer);
      component.set('solution', solution);

      //When
      const dataToDisplay = component.get('dataToDisplay');

      //then
      const result = [{'label': 'Clé USB', 'answer':'1', 'solution': [2], 'rightAnswer' : false },
        {'label': 'Carte mémoire (SD)', 'answer':'2', 'solution': [1], 'rightAnswer': false}];

      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it('should return an array with data to display (proposals contains a dash ("-"))', function () {
      //GIVEN
      const challenge = {
        proposals: '- alain@pix.fr : ${num1}\n' +
        '- leonie@pix.fr : ${num2}\n' +
        '- Programme_Pix.pdf : ${num3}\n' +
        '- lucie@pix.fr : ${num4}\n' +
        '- Programme du festival Pix : ${num5}\n' +
        '- jeremy@pix.fr : ${num6}'
      };
      const answer = {
        value: 'num1: \'1\' num2: \'2\' num3: \'3\' num4: \'4\' num5: \'5\' num6: \'6\''
      };
      const solution = {
        value: 'num1:\n- 2\nnum2:\n- 3\n- 4\nnum3:\n- 6\nnum4:\n- 1\nnum5:\n- 5\nnum6:\n- 2'
      };

      //WHEN
      const component = this.subject();
      component.set('challenge', challenge);
      component.set('answer', answer);
      component.set('solution', solution);
      const dataToDisplay = component.get('dataToDisplay');

      const result = [{ 'label': 'alain@pix.fr', 'answer': '1', 'solution': [2], 'rightAnswer': false },
        { 'label': 'leonie@pix.fr', 'answer': '2', 'solution': [3, 4], 'rightAnswer': false },
        { 'label': 'Programme_Pix.pdf', 'answer': '3', 'solution': [6], 'rightAnswer': false },
        { 'label': 'lucie@pix.fr', 'answer': '4', 'solution': [1], 'rightAnswer': false },
        { 'label': 'Programme du festival Pix', 'answer': '5', 'solution': [5], 'rightAnswer': true },
        { 'label': 'jeremy@pix.fr', 'answer': '6', 'solution': [2], 'rightAnswer': false }];

      //THEN
      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it.only('should return an array with data to display (DEBUG)', function () {
      //GIVEN
      const challenge = {
        proposals: '- Combien le dossier “projet PIX” contient-il de dossiers ? ${Num1}\n\n' +
        '- Combien le dossier “images” contient-il de fichiers ? ${Num2}'
      };
      const answer = {
        value: 'Num1: \'2\' Num2: \'3\''
      };
      const solution = {
        value: 'Num1:\n - 1\n\nNum2:\n - 6'
      };

      //WHEN
      const component = this.subject();
      component.set('challenge', challenge);
      component.set('answer', answer);
      component.set('solution', solution);
      const dataToDisplay = component.get('dataToDisplay');

      const result = [{'label': 'Combien le dossier “projet PIX” contient-il de dossiers ? ', 'answer':'2', 'solution': [1], 'rightAnswer' : false },
        {'label': 'Combien le dossier “images” contient-il de fichiers ? ', 'answer':'3', 'solution': [6], 'rightAnswer': false}];

      console.log('dataToDisplay : ' + JSON.stringify(dataToDisplay));
      //THEN
      expect(dataToDisplay).to.be.deep.equal(result);

    });

  });
});
