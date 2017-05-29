import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | g recaptcha', function() {
  setupComponentTest('g-recaptcha', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{g-recaptcha}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should render the google recaptcha widget', function() {
    // given
    this.render(hbs`{{g-recaptcha}}`);
    // then
    expect(this.$('#g-recaptcha')).to.have.lengthOf(1);
    expect(this.$('script').attr('src')).to.equal('https://www.google.com/recaptcha/api.js?render=explicit');
  });

  it('should return a key in case of success', function() {
    // given

    // when

    // then

  });
});
