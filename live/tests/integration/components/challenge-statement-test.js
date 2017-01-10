import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ChallengeStatement', function () {

  setupComponentTest('challenge-statement', {
    integration: true
  });

  describe('Rendering', function () {

    // Inspired from: https://github.com/emberjs/ember-mocha/blob/0790a78d7464655fee0c103d2fa960fa53a056ca/tests/setup-component-test-test.js#L118-L122
    it('should render challenge instruction if it exists', function () {
      // given
      const challenge = {
        instruction: 'La consigne de mon test'
      };
      this.set('challenge', challenge);

      // when
      this.render(hbs`{{challenge-statement challenge}}`);

      // then
      expect(Ember.$.trim(this.$('.challenge-statement__instruction').text())).to.equal('La consigne de mon test');
    });

    it('should not render challenge instruction if it does not exist', function () {
      // given
      const challenge = {};
      this.set('challenge', challenge);

      // when
      this.render(hbs`{{challenge-statement challenge}}`);

      // then
      expect(this.$('.challenge-statement__instruction')).to.have.lengthOf(0);
    });

  });

});
