import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

// const CHECKBOX_CORRECT_AND_CHECKED = '.comparison-window-boolean:eq(1)';
const LABEL_CORRECT_AND_CHECKED = '.comparison-window-oracle:eq(1)';

// const CHECKBOX_CORRECT_AND_UNCHECKED = '.comparison-window-boolean:eq(2)';
// const LABEL_CORRECT_AND_UNCHECKED = '.comparison-window-oracle:eq(2)';

// const CHECKBOX_INCORRECT_AND_CHECKED = '.comparison-window-boolean:eq(3)';
// const LABEL_INCORRECT_AND_CHECKED = '.comparison-window-oracle:eq(3)';

// const CHECKBOX_INCORRECT_AND_UNCHECKED = '.comparison-window-boolean:eq(0)';
// const LABEL_INCORRECT_AND_UNCHECKED = '.comparison-window-oracle:eq(0)';


describe('Integration | Component | qcm-solution-panel.js', function () {
  setupComponentTest('qcm-solution-panel', {
    integration: true
  });

  describe('#Component should renders: ', function () {
    it('Should renders', function () {
      this.render(hbs`{{qcm-solution-panel}}`);
      expect(this.$()).to.have.length(1);
    });

    it('QCM correcte et cochée', async function () {

      Ember.run(() => {
        const store = this.container.lookup('service:store');

        // Given

        // const assessment = Ember.Object.extend({ id: 'assessment_id' }).create();
        // const challenge = Ember.Object.extend({ id: 'challenge_id', proposals:'a\nb\nc\nd', type: 'QCM' }).create();
        // const answer = Ember.Object.extend({ id: 'answer_id', assessment, challenge, value:'3,4' }).create();
        // const solution = Ember.Object.extend({ id: 'solution_id', value:'2,3' }).create();
        const assessment = store.createRecord('assessment', { id: 'assessment_id'});
        const challenge = store.createRecord('challenge', { id: 'challenge_id', proposals:'-foo\n- bar\n- qix\n- yon', type: 'QCM' });
        const answer = store.createRecord('answer', {id: 'answer_id', assessment, challenge, value:'2,4'});
        const solution = store.createRecord('solution', { id: 'solution_id', value:'2,3' });

        this.set('answer', answer);
        this.set('solution', solution);
        this.set('challenge', challenge);

        // When
        this.render(hbs`{{qcm-solution-panel challenge=challenge answer=answer solution=solution}}`);


        // Then
        expect($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
      // expect($(CHECKBOX_CORRECT_AND_CHECKED)).to.have.lengthOf(0);

      // expect($(CHECKBOX_CORRECT_AND_CHECKED).is(':checked')).to.equal(true);
      // expect(charCount($(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
      // expect($(LABEL_CORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
      // expect($(LABEL_CORRECT_AND_CHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
      // expect($(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);

      });
    });

  });

});
