/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'corner-ribbon',
  'Integration: CornerRibbonComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#corner-ribbon}}
      //     template content
      //   {{/corner-ribbon}}
      // `);

      this.render(hbs`{{corner-ribbon}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
