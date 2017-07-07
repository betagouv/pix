import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupTest} from 'ember-mocha';

describe('Unit | Component | Competence area item Component', function() {

  setupTest('component:competence-area-item', {});

  describe('#Computed Properties behaviors: ', function() {

    describe('#_competencesAreaName', function() {
      it('should return Area name related to competences without index number', function() {
        // given
        const component = this.subject();

        // when
        component.set('competenceArea', {
          property: 'areaName',
          value: '2. area-A',
          items: [{id: 2, name: 'competence-2', areaName: '2. area-A'}]
        });

        // then
        expect(component.get('_competencesAreaName')).to.equal('area-A');
      });

      it('should return empty Area name related to competences when it does not exist', function() {
        // given
        const component = this.subject();

        // when
        component.set('competenceArea', {});

        // then
        expect(component.get('_competencesAreaName')).to.equal('');
      });

    });

  });
});
