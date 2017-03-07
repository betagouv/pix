import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | TimeoutJauge', function () {

  setupComponentTest('timeout-jauge', {
    integration: true
  });

  /* Rendering
  ----------------------------------------------------- */
  describe('Rendering', function () {
    it('It renders', function () {
      // given
      // when
      this.render(hbs`{{timeout-jauge }}`);

      // then
      expect(this.$('.timeout-jauge')).to.have.lengthOf(1);
    });
  });


});
