import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | navbar-header', function() {

  setupComponentTest('header-navbar', {
    integration: true
  });

  beforeEach(function() {
    this.render(hbs`{{navbar-header}}`);
  });

  it('renders', function() {
    expect(this.$()).to.have.length(1);
  });

  it('should display the Pix logo', function () {
    expect(this.$('.navbar-header-logo__image')).to.have.length(1);
    expect(this.$('.navbar-header-logo__image').attr('src')).to.equal('images/pix-logo.svg');
  });

  it('should redirect to index page when clicking on the Pix logo', function () {
    expect(this.$('.navbar-header-logo__link')).to.exist;
  });

  it('should display a link to "project" page', function () {
    expect(this.$('.navbar-header-links__link--project')).to.exist;
  });

});
