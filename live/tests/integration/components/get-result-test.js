/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'get-result',
  'Integration: GetResultComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#get-result}}
      //     template content
      //   {{/get-result}}
      // `);

      this.render(hbs`{{get-result}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
