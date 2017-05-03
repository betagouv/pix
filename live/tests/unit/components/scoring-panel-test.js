import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Component | qrocm-solution-panel', function () {

  setupTest('component:scoring-panel', {});

  describe('#hasATrophy', function () {

    const component = context.subject();

    it('should be true when level is more than 0', function () {
      // given
      const assessmentWithTrophy = {'estimated-level' : 1}

      // when
      component.set('assessment', assessmentWithTrophy);
      const hasATrophy = component.get('hasATrophy');

      // then
      expect(hasATrophy).to.be.equal(true);
    });

    it('should be false when level is equal to 0', function () {
      // given
      const assessmentWithTrophy = {'estimated-level' : 0}

      // when
      component.set('assessment', assessmentWithTrophy);
      const hasATrophy = component.get('hasATrophy');

      // then
      expect(hasATrophy).to.be.equal(false);
    });
  });

});
