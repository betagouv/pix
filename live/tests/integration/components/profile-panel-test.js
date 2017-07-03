import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | profile panel', function() {
  setupComponentTest('profile-panel', {
    integration: true
  });

  describe('(Rendering behavior) Component: ', function() {

    beforeEach(function() {
      this.render(hbs`{{profile-panel}}`);
    });

    it('should be rendered', function() {
      expect(this.$()).to.have.length(1);
    });

    it('should render a wrapper', function() {
      // then
      const WRAPPER_CLASS = '.profile-panel';
      expect(this.$(WRAPPER_CLASS)).to.have.length(1);
    });

    it('should render a profile header', function() {
      // Then
      const HEADER_CLASS = '.profile-panel__header';
      const HEADER_TITLE = '.profile-header__title';
      expect(this.$(HEADER_CLASS)).to.have.length(1);
      expect(this.$(HEADER_TITLE).text().trim()).to.be.equal('Votre profil');
    });

    it('should render a competency profile block', function() {
      // Then
      const COMPETENCY_BLOCK = '.profile-panel__competency-profile';
      expect(this.$(COMPETENCY_BLOCK)).to.have.length(1);
    });

  });
});
