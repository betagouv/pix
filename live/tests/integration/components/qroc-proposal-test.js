/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'qroc-proposal',
  'Integration: QrocProposalComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#qroc-proposal}}
      //     template content
      //   {{/qroc-proposal}}
      // `);

      this.render(hbs`{{qroc-proposal}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
