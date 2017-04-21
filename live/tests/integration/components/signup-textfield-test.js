import {expect} from 'chai';
import {
  describe,
  it
} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

describe.only('Integration | Component | signup textfield', function () {
  setupComponentTest('signup-textfield', {
    integration: true
  });

  const LABEL = '.signup-textfield__label';
  const LABEL_TEXT = 'NOM';
  const MESSAGE = '.signup-textfield__message';
  const MESSAGE_TEXT = '';
  const INPUT = '.signup-textfield__input';

  describe('#Component rendering', function () {
    beforeEach(function () {
      this.set('label', 'nom');
      this.set('message', '');
      this.set('status', '');
      this.set('textfieldId', 'firstname');

      // When
      this.render(hbs`{{signup-textfield label=label message=message status=status textfieldId=textfieldId}}`);
    });


    [
      {expectedRendering: 'label', item: LABEL, expectedLength: 1},
      {expectedRendering: 'div', item: MESSAGE, expectedLength: 1},
      {expectedRendering: 'input', item: INPUT, expectedLength: 1},
      {expectedRendering: 'div', item: '', expectedLength: 1},

    ].forEach(function ({expectedRendering, item, expectedLength}) {
      it(`Should render a ${expectedRendering}`, function () {
        // Then
        expect(this.$(item)).to.have.length(expectedLength);
        expect(this.$(item).prop('nodeName')).to.equal(expectedRendering.toUpperCase());
      });
    });


    [
      {item: LABEL, expectedRendering: 'label', expectedText: LABEL_TEXT},
      {item: MESSAGE, expectedRendering: 'div.message', expectedText: MESSAGE_TEXT},

    ].forEach(function ({item, expectedRendering, expectedText}) {
      it(`Should render a ${expectedRendering}`, function () {
        // Then
        expect(this.$(item).text().toUpperCase()).to.equal(expectedText);
      });
    });


  });

  //behavior
  describe('#Component Interactions', function () {

    it('should handle action <validate> when input lost focus', function () {
      // given
      let isActionValidateHandled = false;
      let inputValueToValidate;
      const expectedInputValue = 'pix';

      this.on('validate', function (arg) {
        isActionValidateHandled = true;
        inputValueToValidate = arg;
      });

      this.set('label', 'nom');
      this.set('message', '');
      this.set('status', '');
      this.set('textfieldId', 'firstname');

      this.render(hbs`{{signup-textfield label=label message=message status=status textfieldId=textfieldId validate="validate"}}`);
      // when
      this.$(INPUT).val('pix');
      this.$(INPUT).trigger('focusout');
      // then
      return wait().then(() => {
        expect(isActionValidateHandled).to.be.true;
        expect(inputValueToValidate).to.equal(expectedInputValue);
      });
    });
  });


});
