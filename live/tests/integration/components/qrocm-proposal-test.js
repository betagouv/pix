/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'qrocm-proposal',
  'Integration: QrocmProposalComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#qrocm-proposal}}
      //     template content
      //   {{/qrocm-proposal}}
      // `);

      this.render(hbs`{{qrocm-proposal}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
