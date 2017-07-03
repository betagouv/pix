import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | profile panel', function() {
  setupComponentTest('profile-panel', {
    integration: true
  });

  describe('(Rendering behavior) Component: ', function() {

    it('should be rendered', function() {
      // when
      this.render(hbs`{{profile-panel}}`);

      // then
      expect(this.$()).to.have.length(1);
    });

    it('should render a wrapper', function() {
      // when
      this.render(hbs`{{profile-panel}}`);

      // then
      const WRAPPER_CLASS = '.profile-panel';
      expect(this.$(WRAPPER_CLASS)).to.have.length(1);
    });

    it('should render a profile header', function() {
      // when
      this.render(hbs`{{profile-panel}}`);

      // Then
      const HEADER_CLASS = '.profile-panel__header';
      const HEADER_TITLE = '.profile-header__title';
      expect(this.$(HEADER_CLASS)).to.have.length(1);
      expect(this.$(HEADER_TITLE).text().trim()).to.be.equal('Votre profil');
    });

    it('should render a competency profile block', function() {
      // when
      this.render(hbs`{{profile-panel}}`);

      // Then
      const COMPETENCY_BLOCK = '.profile-panel__competence-areas';
      expect(this.$(COMPETENCY_BLOCK)).to.have.length(1);
    });

    it('should render 5 competence areas, when there are 5 competences with different area for each one', () => {
      // given
      const competences = {};
      this.set('competences', competences);

      // when
      this.render(hbs`{{profile-panel competences=competences}}`);

      // then
      expect(this.$('.profile-panel__competence-area')).to.have.lengthOf(3);
    });

    it('should render only 1 competence area, when there are 5 competences with the same area');
    it('should render 2 competence areas, when there are 5 competences related to 2 different areas');

  });
});
