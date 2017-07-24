import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

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

  it('should display the Pix logo', function() {
    expect(this.$('.navbar-header-logo')).to.have.lengthOf(1);
    expect(this.$('.pix-logo')).to.have.lengthOf(1);
  });

  it('should display a link to "project" page', function() {
    expect(this.$('.navbar-header-links__link--project')).to.have.lengthOf(1);
  });

  it('should display a link to "referential" page', function() {
    expect(this.$('.navbar-header-links__link--competences')).to.have.lengthOf(1);
    expect(this.$('.navbar-header-links--user-logged')).to.have.length(0);
  });

  describe('Display user details', function() {

    describe('When user is logged', function() {

      beforeEach(function() {
        this.set('user', { firstName: 'FHI', lastName: '4EVER' });
      });

      it('should display user information, when user is logged', function() {
        // when
        this.render(hbs`{{navbar-header user=user}}`);
        // then
        expect(this.$('.logged-user-details')).to.have.length(1);
        expect(this.$('.logged-user-name').text().trim()).to.be.equal('FHI 4EVER');
      });

      it('should move navbar to top', function() {
        // when
        this.render(hbs`{{navbar-header user=user}}`);
        // then
        expect(this.$('.navbar-header-links--user-logged')).to.have.length(1);
      });

      it('should hide user menu, when no action on user-name', function() {
        // when
        this.render(hbs`{{navbar-header user=user}}`);
        // then
        expect(this.$('.logged-user-menu')).to.have.length(0);
      });

      it('should display a user menu, when user-name is clicked', function() {
        // when
        this.render(hbs`{{navbar-header user=user}}`);
        this.$('.logged-user-name').click();
        // then
        return wait().then(() => {
          expect(this.$('.logged-user-menu')).to.have.length(1);
        });
      });

      it('should hide user menu, when it was previously open and user-name is clicked one more time', function() {
        // when
        this.render(hbs`{{navbar-header user=user}}`);
        this.$('.logged-user-name').click();
        this.$('.logged-user-name').click();
        // then
        return wait().then(() => {
          expect(this.$('.logged-user-menu')).to.have.length(0);
        });
      });
    });

    describe('when user is unlogged', function() {
      it('should not display user information, for unlogged', function() {
        // when
        this.render(hbs`{{navbar-header}}`);
        expect(this.$('.logged-user-details')).to.have.length(0);
      });
    });

  });
});
