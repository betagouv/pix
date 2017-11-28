import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | navbar mobile menu', function() {
  setupComponentTest('navbar-mobile-menu', {
    integration: true
  });

  it('should be rendered', function() {
    // when
    this.render(hbs`{{navbar-mobile-menu}}`);

    // then
    expect(this.$()).to.have.length(1);
  });

  context('when close button is clicked', function() {

    it('should close the side-menu', function() {
      // given
      this.render(hbs`{{navbar-mobile-menu}}`);

      // when
      this.$('.burger-close-button').click();

      // then
      expect(this.$('.side-menu').attr('style').indexOf('box-shadow: none')).to.be.at.least(0);
    });
  });
});
