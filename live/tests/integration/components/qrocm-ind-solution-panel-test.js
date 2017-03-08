import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | qrocm solution panel', function() {
  setupComponentTest('qrocm-solution-panel', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#qrocm-solution-panel}}
    //     template content
    //   {{/qrocm-solution-panel}}
    // `);

    this.render(hbs`{{qrocm-solution-panel}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should disabled all inputs', function () {
    // given
    this.render(hbs`{{qroc-solution-panel}}`);
    const input = this.$('input');
    // then
    expect(input).to.be.disabled;
  });

  describe('comparison of a qrocm-ind with a right answer, a wrong answer and one empty answer', function () {

    describe('right answer display', function () {

      it('should display the right answer in green bold', function () {
        // given

        // when

        // then

      });

      it('should not display the solution', function () {
        // given

        // when

        // then

      });
    });

    describe('wrong answer display', function () {

      it('should display the wrong answer in the second div line-throughed bold', function () {
        // given

        // when

        // then

      });

      it('should display one solution in bold green below the input', function () {
        // given

        // when

        // then

      });
    });

    describe('no answer display', function () {

      it('should display the empty answer in the third div with "pas de réponse" in italic', function () {
        // given

        // when

        // then

      });

      it('should display one solution in bold green below the input', function () {
        // given

        // when

        // then

      });
    });

  });
});
