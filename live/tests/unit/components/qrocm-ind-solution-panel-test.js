import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Component | qrocm-solution-panel', function () {

  setupTest('component:qrocm-ind-solution-panel', {});

  describe('#answersAsObject', function () {

    it('should return an object of given answers with key of the input', function () {
      // given
      const answer = {
        value : 'num1: \'4\' num2: \'1\' num3: \'2\' num4: \'3\''
      };
      const result = {
        'num1': '4',
        'num2': '1',
        'num3': '2',
        'num4': '3',
      };

      // when
      const component = this.subject();
      component.set('answer', answer);
      const answersAsObject = component.get('answersAsObject');

      // then
      expect(answersAsObject).to.be.deep.equal(result);
    });

  });

  describe('#solutionsAsObject', function () {

    it('should return an object which contains arrays of the solution for each input', function () {
      // given
      const solution = {
        value : 'num1:\n- 4\nnum2:\n- 2\nnum3:\n- 1\nnum4:\n- 3'
      };
      const result = {
        'num1': ['4'],
        'num2': ['2'],
        'num3': ['1'],
        'num4': ['3'],
      };
      // when
      const component = this.subject();
      component.set('solution', solution);
      const solutionsAsObject = component.get('solutionsAsObject');

      // then
      expect(solutionsAsObject).to.be.deep.equal(result);
    });

    it('should return an object which contains arrays of the multiple potentials solution for each input', function () {
      // given
      const solution = {
        value : 'num1:\n- 2\nnum2:\n- 3\n- 4\nnum3:\n- 1\n- 5\n- 6'
      };
      const result = {
        'num1': ['2'],
        'num2': ['3', '4'],
        'num3': ['1', '5', '6']
      };
      // when
      const component = this.subject();
      component.set('solution', solution);
      const solutionsAsObject = component.get('solutionsAsObject');

      // then
      expect(solutionsAsObject).to.be.deep.equal(result);
    });
  });

  describe('#labelsAsObject', function () {

    it('should return an object with labels and key on the input 1', function () {
      // given
      const challenge = {
        proposals: 'Clé USB : ${num1}\n\n' +
        'Carte mémoire (SD) : ${num2}\n\n' +
        'Disque dur externe : ${num3}\n\n' +
        'CD-R / DVD-R : ${num4}'
      };

      const result = {
        'num1' : 'Clé USB : ',
        'num2' : 'Carte mémoire (SD) : ',
        'num3' : 'Disque dur externe : ',
        'num4' : 'CD-R / DVD-R : ',
      };

      // when
      const component = this.subject();
      component.set('challenge', challenge);
      const labelsAsObject = component.get('labelsAsObject');

      // then
      expect(labelsAsObject).to.be.deep.equal(result);

    });

    it('should return an object with labels and key on the input 2', function () {
      // given
      const challenge = {
        proposals: '- Combien le dossier “projet PIX” contient-il de dossiers ? ${Num1}\n\n' +
        '- Combien le dossier “images” contient-il de fichiers ? ${Num2}'
      };

      const result = {
        'Num1' : '- Combien le dossier “projet PIX” contient-il de dossiers ? ',
        'Num2' : '- Combien le dossier “images” contient-il de fichiers ? ',
      };

      // when
      const component = this.subject();
      component.set('challenge', challenge);
      const labelsAsObject = component.get('labelsAsObject');

      // then
      expect(labelsAsObject).to.be.deep.equal(result);
    });

    it('should return an object with labels and key on the input 3', function () {
      // given
      const challenge = {
        proposals: '- alain@pix.fr : ${num1}\n' +
        '- leonie@pix.fr : ${num2}\n' +
        '- Programme_Pix.pdf : ${num3}\n' +
        '- lucie@pix.fr : ${num4}\n' +
        '- Programme du festival Pix : ${num5}\n' +
        '- jeremy@pix.fr : ${num6}'
      };

      const result = {
        'num1' : '- alain@pix.fr : ',
        'num2' : '- leonie@pix.fr : ',
        'num3' : '- Programme_Pix.pdf : ',
        'num4' : '- lucie@pix.fr : ',
        'num5' : '- Programme du festival Pix : ',
        'num6' : '- jeremy@pix.fr : ',
      };

      // when
      const component = this.subject();
      component.set('challenge', challenge);
      const labelsAsObject = component.get('labelsAsObject');

      // then
      expect(labelsAsObject).to.be.deep.equal(result);
    });
  });

  describe('#dataToDisplay', function () {
    it('should return an array with data to display (case when the answers are right)', function () {
      //Given
      const labelsAsObject = {'smiley1':'content : ','smiley2':'triste : '};
      const answersAsObject = {'smiley1':':)','smiley2':':('};
      const solutionsAsObject = {'smiley1':[':-)',':)',':-D',':D',':))'],'smiley2':[':-(',':(',':((']};
      const result = [{'label': 'content : ', 'answer':':)', 'solution': ':-)', 'rightAnswer' : true, 'wrongAnswer':false, 'noAnswer':false},
        {'label': 'triste : ', 'answer':':(', 'solution': ':-(', 'rightAnswer': true, 'wrongAnswer':false, 'noAnswer':false}];

      //when
      const component = this.subject();
      component.set('labelsAsObject', labelsAsObject);
      component.set('answersAsObject', answersAsObject);
      component.set('solutionsAsObject', solutionsAsObject);
      const dataToDisplay = component.get('dataToDisplay');

      //Then
      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it('should return an array with data to display (case when there is wrong answers)', function () {
      //Given
      const labelsAsObject = {'num1':'Clé USB : ','num2':'Carte mémoire (SD) : '};
      const answersAsObject = {'num1':'1','num2':'2'};
      const solutionsAsObject = {'num1':['2'],'num2':['1']};
      const result = [{'label': 'Clé USB : ', 'answer':'1', 'solution': '2', 'rightAnswer' : false, 'wrongAnswer' : true, 'noAnswer' : false },
        {'label': 'Carte mémoire (SD) : ', 'answer':'2', 'solution': '1', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false}];

      const component = this.subject();
      component.set('labelsAsObject', labelsAsObject);
      component.set('answersAsObject', answersAsObject);
      component.set('solutionsAsObject', solutionsAsObject);

      //When
      const dataToDisplay = component.get('dataToDisplay');

      //then
      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it('should return an array with data to display (case when there is some empty answer)', function () {
      //Given
      const labelsAsObject = {'num1':'Clé USB : ','num2':'Carte mémoire (SD) : '};
      const answersAsObject = {'num1':'','num2':'2'};
      const solutionsAsObject = {'num1':['2'],'num2':['1']};
      const result = [{'label': 'Clé USB : ', 'answer':'Pas de réponse', 'solution': '2', 'rightAnswer' : false, 'wrongAnswer' : false, 'noAnswer' : true },
        {'label': 'Carte mémoire (SD) : ', 'answer':'2', 'solution': '1', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false}];

      const component = this.subject();
      component.set('labelsAsObject', labelsAsObject);
      component.set('answersAsObject', answersAsObject);
      component.set('solutionsAsObject', solutionsAsObject);

      //When
      const dataToDisplay = component.get('dataToDisplay');

      //then
      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it('should return an array with data to display (proposals contains a dash ("-"))', function () {
      //GIVEN
      const labelsAsObject = {'num1':'- alain@pix.fr : ','num2':'- leonie@pix.fr : ','num3':'- Programme_Pix.pdf : ','num4':'- lucie@pix.fr : ','num5':'- Programme du festival Pix : ','num6':'- jeremy@pix.fr : '};
      const answersAsObject = {'num1':'1','num2':'2','num3':'3','num4':'4','num5':'5','num6':'6'};
      const solutionsAsObject = {'num1':['2'],'num2':['3','4'],'num3':['6'],'num4':['1'],'num5':['5'],'num6':['2']};
      const result = [{ 'label': '- alain@pix.fr : ', 'answer': '1', 'solution': '2', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false },
        { 'label': '- leonie@pix.fr : ', 'answer': '2', 'solution': '3', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false },
        { 'label': '- Programme_Pix.pdf : ', 'answer': '3', 'solution': '6', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false },
        { 'label': '- lucie@pix.fr : ', 'answer': '4', 'solution': '1', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false },
        { 'label': '- Programme du festival Pix : ', 'answer': '5', 'solution': '5', 'rightAnswer': true, 'wrongAnswer' : false, 'noAnswer' : false },
        { 'label': '- jeremy@pix.fr : ', 'answer': '6', 'solution': '2', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false }];

      //WHEN
      const component = this.subject();
      component.set('labelsAsObject', labelsAsObject);
      component.set('answersAsObject', answersAsObject);
      component.set('solutionsAsObject', solutionsAsObject);
      const dataToDisplay = component.get('dataToDisplay');

      //THEN
      expect(dataToDisplay).to.be.deep.equal(result);

    });

    it('should return an array with data to display (proposals are questions)', function () {
      //GIVEN
      const labelsAsObject = {'Num1':'- Combien le dossier "projet PIX" contient-il de dossiers ? ','Num2':'- Combien le dossier "images" contient-il de fichiers ? '};
      const answersAsObject = {'Num1':'2','Num2':'3'};
      const solutionsAsObject = {'Num1':['1'],'Num2':['6']};
      const result = [{'label': '- Combien le dossier "projet PIX" contient-il de dossiers ? ', 'answer':'2', 'solution': '1', 'rightAnswer' : false, 'wrongAnswer' : true, 'noAnswer' : false },
        {'label': '- Combien le dossier "images" contient-il de fichiers ? ', 'answer':'3', 'solution': '6', 'rightAnswer': false, 'wrongAnswer' : true, 'noAnswer' : false}];

      //WHEN
      const component = this.subject();
      component.set('labelsAsObject', labelsAsObject);
      component.set('answersAsObject', answersAsObject);
      component.set('solutionsAsObject', solutionsAsObject);

      const dataToDisplay = component.get('dataToDisplay');

      //THEN
      expect(dataToDisplay).to.be.deep.equal(result);

    });

  });

});
