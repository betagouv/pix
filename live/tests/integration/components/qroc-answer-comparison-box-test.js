import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

const ANSWER_BLOCK = '.answer-block';
const ANSWER_INPUT = '.answer-block__input';
const SOLUTION_BLOCK = '.solution-block';
const SOLUTION_DISPLAY = '.solution-block__display';

describe.only('Integration | Component | qroc answer comparison box', function () {
  setupComponentTest('qroc-answer-comparison-box', {
    integration: true
  });

  it('renders', function () {
    this.render(hbs`{{qroc-answer-comparison-box}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should disabled all inputs', function () {
    // given
    this.render(hbs`{{qroc-answer-comparison-box}}`);
    const input = this.$('input');
    // then
    expect(input).to.be.disabled;
  });

  describe('comparison when the answer is right', function () {

    const assessment = Ember.Object.extend({ id: 'assessment_id' }).create();
    const challenge = Ember.Object.extend({ id: 'challenge_id' }).create();
    const answer = Ember.Object.extend({ id: 'answer_id', isResultOk: true, assessment, challenge }).create();

    it('should diplay the answer in bold green and not the solution', function () {
      // given
      this.set('answer', answer);
      this.render(hbs`{{qroc-answer-comparison-box answer=answer}}`);
      // when
      const answerInput = this.$(ANSWER_INPUT);
      const answerBlock = this.$(ANSWER_BLOCK);
      const solutionBlock = this.$(SOLUTION_BLOCK);
      // then
      expect(answerInput).to.have.length(1);
      expect(answerBlock).to.have.length(1);
      expect(answerInput.css('font-weight')).to.be.equal('bold');
      expect(answerInput.css('text-decoration')).to.be.equal('none');
      expect(answerInput.css('color')).to.be.equal('rgb(19, 201, 160)');
      expect(solutionBlock).to.have.length(0);
    });
  });

  describe('comparison when the answer is false', function () {

    beforeEach(function () {
      const assessment = Ember.Object.extend({ id: 'assessment_id' }).create();
      const challenge = Ember.Object.extend({ id: 'challenge_id' }).create();
      const answer = Ember.Object.extend({ id: 'answer_id', isResultOk: false, assessment, challenge }).create();

      this.set('answer', answer);
      this.render(hbs`{{qroc-answer-comparison-box answer=answer}}`);
    });

    it('should display the false answer line-through', function () {
      // given
      const answerBlock = this.$(ANSWER_BLOCK);
      const answerInput = this.$(ANSWER_INPUT);
      // then
      expect(answerBlock).to.have.length(1);
      expect(answerInput.css('font-weight')).to.be.equal('400');
      expect(answerInput.css('text-decoration')).to.be.equal('line-through');

    });

    it('should display the solution with a arrow and the solution in bold green', function () {
      // given
      const blockSolution = this.$(SOLUTION_BLOCK);
      const blockSolutionText = this.$(SOLUTION_DISPLAY);
      // then
      expect(blockSolution).to.have.length(1);
      expect(blockSolutionText.css('color')).to.be.equal('rgb(19, 201, 160)');
      expect(blockSolutionText.css('font-weight')).to.be.equal('bold');
    });
  });
});
