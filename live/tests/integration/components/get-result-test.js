import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';


describe('Integration | Component | GetResultComponent', function () {


  setupComponentTest('get-result', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{get-result}}`);
    expect(this.$()).to.have.length(1);
  });


  it('should render a SVG that represents that the user has the correct answer', function () {

    const answer = Ember.Object.extend({ id: 'answer_id', isResultOk: true, assessment }).create();
    const assessment = Ember.Object.extend({ id: 'assessment_id' , answers: [answer]}).create();

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-correct-answer')).to.have.length(1);
  });


  it('should render a SVG that represents that the user has skip', function () {

    const answer = Ember.Object.extend({ id: 'answer_id', isResultWithoutAnswer: true, assessment }).create();
    const assessment = Ember.Object.extend({ id: 'assessment_id' , answers: [answer]}).create();

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-without-answer')).to.have.length(1);
  });


  it('should render a SVG that represents that the user has the wrong answer', function () {

    const answer = Ember.Object.extend({ id: 'answer_id', isResultNotOk: true, assessment }).create();
    const assessment = Ember.Object.extend({ id: 'assessment_id' , answers: [answer]}).create();

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-incorrect-answer')).to.have.length(1);
  });


  it('should render a SVG that represents that the user has a partially right answer', function () {

    const answer = Ember.Object.extend({ id: 'answer_id', isResultPartiallyOk: true, assessment }).create();
    const assessment = Ember.Object.extend({ id: 'assessment_id' , answers: [answer]}).create();

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-partially-answer')).to.have.length(1);
  });


  it('should render a SVG that represents that the user has timed out', function () {

    const answer = Ember.Object.extend({ id: 'answer_id', isResultTimedOut: true, assessment }).create();
    const assessment = Ember.Object.extend({ id: 'assessment_id' , answers: [answer]}).create();

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-timedout-answer')).to.have.length(1);
  });


  it('should render a SVG that represents that the correction is not yet implemented', function () {

    const answer = Ember.Object.extend({ id: 'answer_id', assessment }).create();
    const assessment = Ember.Object.extend({ id: 'assessment_id' , answers: [answer]}).create();

    this.set('assessment', assessment);

    // when
    this.render(hbs`{{get-result assessment=assessment}}`);

    // then
    expect(this.$('svg.svg-not-yet-implemented')).to.have.length(1);
  });

});
