import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ChallengeInstruction', function () {

  setupComponentTest('challenge-instruction', {
    needs: ['showdown:markdown']
  });

  /* Rendering
   ----------------------------------------------------- */

  describe('Rendering', function () {

    const instruction = {
      text: 'challenge instruction text',
      illustrationUrl: 'http://challenge.instruction/illustration.url',
      attachmentUrl: 'http://challenge.instruction/attachment.url'
    };

    function initComponent() {
      const component = this.subject();
      component.set('instruction', instruction);
    }

    function renderComponent() {
      this.render(hbs`{{challenge-instruction instruction=instruction}}`);
    }

    // Inspired from:
    // - Ember-mocha: https://github.com/emberjs/ember-mocha#setup-component-tests
    // - Ember: https://guides.emberjs.com/v2.10.0/testing/testing-components
    // -        https://guides.emberjs.com/v2.10.0/tutorial/autocomplete-component/
    it.skip('should render the challenge instruction', function () {
      // given
      initComponent.call(this);

      // when
      renderComponent.call(this);

      // then
      expect(this.$('.challenge-instruction')).to.exist;
    });

  });

});
