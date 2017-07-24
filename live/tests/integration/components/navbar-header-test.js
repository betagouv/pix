import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | navbar-header', function() {

  setupComponentTest('header-navbar', {
    integration: true
  });

  beforeEach(function() {
    this.render(hbs`{{navbar-header}}`);
  });

  it('renders', function() {
    expect(this.$()).to.have.length(1);
  });

  it('should display the Pix logo', function() {
    expect(this.$('.navbar-header-logo')).to.have.lengthOf(1);
    expect(this.$('.pix-logo')).to.have.lengthOf(1);
  });

  it('should display a link to "project" page', function() {
    expect(this.$('.navbar-header-links__link--project')).to.have.lengthOf(1);
  });

  it('should display a link to "referential" page', function() {
    expect(this.$('.navbar-header-links__link--competences')).to.have.lengthOf(1);
  });

  describe('Display user details', function() {

    it('should display user information, when user is logged', function() {
      // when
      this.render(hbs`{{navbar-header }}`);
    });
  });
});
