import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Component | Competence-level-progress-bar ', function() {

  setupTest('component:competence-level-progress-bar', {});

  describe('#Computed Properties behaviors: ', function() {

    describe('#hasLevel', function() {

      it('should return true if the level of the competence is equal or more than 0', function() {
        // given
        const component = this.subject();

        // when
        component.set('level', 1);

        // then
        expect(component.get('hasLevel')).to.equal(true);
      });

      it('should return false if the level of the competence is equal to -1', function() {
        // given
        const component = this.subject();

        // when
        component.set('level', -1);

        // then
        expect(component.get('hasLevel')).to.equal(false);
      });

    });

  });
});
