import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | score pastille', function() {
  setupComponentTest('score-pastille', {
    integration: true
  });

  describe('Component rendering', function() {

    it('should render component', function() {
      // when
      this.render(hbs`{{score-pastille}}`);

      // then
      expect(this.$()).to.have.length(1);
    });

    it('should display provided score in pastille', function() {
      // given
      const pixScore = '777';
      this.set('pixScore', pixScore);
      // when
      this.render(hbs`{{score-pastille pixScore=pixScore}}`);
      // then
      expect(this.$('.score-pastille__pix-score').text().trim()).to.equal(pixScore);
    });
  });
});
