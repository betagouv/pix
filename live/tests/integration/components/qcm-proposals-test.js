import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'qcm-proposals',
  'Integration: QcmProposalsComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{qcm-proposals}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
