import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

const HEADING_ILLUSTRATION_CLASS = '.scoring-panel__illustration';
const HEADING_TITLE_CLASS = '.scoring-panel__title';
const HEADING_TITLE_CONTENT = 'tant pix !';
const DESCRIPTION_CLASS = '.scoring-panel__description';
const DESCRIPTION_CONTENT = 'blabla';
const BUTTON = '.scoring-panel__button';
const BUTTON_CONTENT = 'test suivant';
describe.only('Integration | Component | scoring panel tantpix', function() {
  setupComponentTest('scoring-panel-tantpix', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#scoring-panel-tantpix}}
    //     template content
    //   {{/scoring-panel-tantpix}}
    // `);

    this.render(hbs`{{scoring-panel-tantpix}}`);
    expect(this.$()).to.have.length(1);
  });

  describe('On Component rendering:', function(){
    beforeEach(function(){
      this.render(hbs`{{scoring-panel-tantpix}}`);
    });

    [

      {itemName: 'an Image', expectedType: 'svg', expectedClass: HEADING_ILLUSTRATION_CLASS, expectedContent:''},
      {itemName: 'a title', expectedType: 'div', expectedClass: HEADING_TITLE_CLASS, expectedContent: HEADING_TITLE_CONTENT},
      {itemName: 'a descritpion', expectedType: 'div', expectedClass: DESCRIPTION_CLASS, expectedContent:DESCRIPTION_CONTENT},
      {itemName: 'a button', expectedType: 'button', expectedClass: BUTTON, expectedContent: BUTTON_CONTENT},

    ].forEach(({itemName, expectedType, expectedClass, expectedContent}) =>{
      it(`should render ${itemName} in scoring panel`, function (){
        const itemRendered = this.$(expectedClass);
        // then
        expect(itemRendered.prop('NodeName')).to.equal(expectedType);
        expect(itemRendered.text()).to.equal(expectedContent);
      });
    });
  });

});
