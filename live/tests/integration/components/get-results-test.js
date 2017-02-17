import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | get-results', function() {

  setupComponentTest('get-results', {
    integration: true
  });

  function renderComponent() {
    this.render(hbs`{{get-results}}`);
  }

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#get-results}}
    //     template content
    //   {{/get-results}}
    // `);

    renderComponent.call(this);
    expect(this.$()).to.have.length(1);
  });

  describe('Component rendering', function() {

    it('should render a course banner', function() {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.assessment-results__course-banner')).to.have.length(1);
    });

    it('should render a title', function() {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.assessment-results__title')).to.have.length(1);
    });

    it('should render an assessment result list', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.assessment-results__list')).to.have.length(1);
    });

    it('should render a link to back to index page', function () {
      // when
      renderComponent.call(this);
      // then
      expect(this.$('.assessment-results__index-link-container')).to.have.length(1);
    });
  });

});
