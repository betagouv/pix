import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | feedback-panel', function () {
  setupComponentTest('feedback-panel', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#feedback-panel}}
    //     template content
    //   {{/feedback-panel}}
    // `);

    this.render(hbs`{{feedback-panel}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should display feedback-form when user click on open-button', function () {
    // given
    this.set('isFormVisible', true);

    // when
    this.render(hbs`{{feedback-panel}}`);

    // then
    expect(this.$('feedback-panel__form')).to.have.length(1);
  });

  it('should hide feedback-form when user click on cancel-button', function () {
    // given
    this.set('isFormVisible', false);

    // when
    this.render(hbs`{{feedback-panel}}`);

    // then
    expect(this.$('feedback-panel__form')).to.have.length(0);
  });

});
