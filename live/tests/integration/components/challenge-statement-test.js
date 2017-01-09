import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | ChallengeStatement', function () {

  setupComponentTest('challenge-statement', {
  });

  /* Rendering
   ----------------------------------------------------- */

  describe('Rendering', function () {

    // Inspired from:
    // - Ember-mocha: https://github.com/emberjs/ember-mocha#setup-component-tests
    // - Ember: https://guides.emberjs.com/v2.10.0/testing/testing-components
    // -        https://guides.emberjs.com/v2.10.0/tutorial/autocomplete-component/
    it('should render the challenge instruction', function () {
      // given
      Ember.run(() => {
        const challenge = {
          instruction: 'La consigne de mon test',
          attachements: ['file.1.url', 'file.2.url']
        };
        this.set('challenge', challenge);

        // when
        this.render(hbs`{{challenge-statement challenge}}`);

        // then
        expect(this.$('.challenge-statement')).to.exist;
      });
    });

  });

});
