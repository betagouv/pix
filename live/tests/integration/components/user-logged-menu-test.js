import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | user logged menu', function() {
  setupComponentTest('user-logged-menu', {
    integration: true
  });

  describe('Default rendering', function() {

    beforeEach(function() {
      // when
      this.render(hbs`{{user-logged-menu}}`);
    });

    it('should render component', function() {
      // then
      expect(this.$()).to.have.length(1);
    });

    it('should display logged user name ', function() {
      // then
      expect(this.$('.logged-user-name')).to.have.length(1);
      expect(this.$('.logged-user-name__link')).to.have.length(1);
    });

  });
});
