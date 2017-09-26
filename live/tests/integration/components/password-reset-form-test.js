import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import sinon from 'sinon';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | password reset form', function() {
  setupComponentTest('password-reset-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#password-reset-form}}
    //     template content
    //   {{/password-reset-form}}
    // `);

    this.render(hbs`{{password-reset-form}}`);
    expect(this.$()).to.have.length(1);
  });

  it('renders all the necessary elements of the form ', function() {
    // when
    this.render(hbs`{{password-reset-form}}`);

    // then
    expect(this.$('.password-reset-form__pix-logo')).to.have.length(1);
    expect(this.$('.password-reset-form__title')).to.have.length(1);
    expect(this.$('.password-reset-form__text')).to.have.length(1);
    expect(this.$('.password-reset-form__input')).to.have.length(1);
    expect(this.$('.password-reset-form__label')).to.have.length(1);
    expect(this.$('.password-reset-form__button')).to.have.length(1);
  });

  it('should send a password reset demand to the route', function() {
    // given
    const email = 'email@example.com';
    const sendToRoutePasswordResetDemandSpy = sinon.spy();
    this.set('sendToRoutePasswordResetemand', sendToRoutePasswordResetDemandSpy);
    this.set('passwordResetDemand', (givenEmail)=>{
      // THEN
      expect(givenEmail).to.equal(email);
    });

    this.render(hbs`{{password-reset-form onSubmit=(action passwordResetDemand)}}`);

    this.$('.password-reset-form__email-input').val(email);
    this.$('.password-reset-form__email-input').change();

    // when
    $('.password-reset-form__submit-button').click();
  });

});
