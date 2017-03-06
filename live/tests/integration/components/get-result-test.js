import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe(' c345 Integration | Component | GetResultComponent', function() {

  setupComponentTest('get-result', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{get-result}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should render the SVG that represents an incorrect answer if the answer is incorrect', function () {


    const store = this.container.lookup('service:store');

    const answer = store.create('answer', {result:'ko'});
    const assessment = store.create('assessment', {answers: answer});

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-not-yet-implemented')).to.have.length(1);
    // expect(this.$('svg').html()).to.equal('ez');
  });


});
