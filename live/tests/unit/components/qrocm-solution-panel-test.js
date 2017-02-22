import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe.only('Unit | Component | qrocm-solution-panel', function () {

  setupTest('component:qrocm-solution-panel', {});

  describe('#answerToDisplay', function () {

    it('should return the labels of input in an array', function () {
      //given
      const challenge = {
        proposals : 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}\n\n Disque dur externe : ${num3}\n\n CD-R / DVD-R : ${num4}'
      };
      const expectedResult = ['Clé USB : ', 'Carte mémoire : ', 'Disque dur externe : ', 'CD-R / DVD-R : '];
      const component = this.subject();
      component.set('challenge', challenge);

      //when
      const labelsAsArray = component.get('labelsAsArray');
      //then
      expect(labelsAsArray).to.be.equal(expectedResult);
    });

  });
});
