import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | scoring panel', function() {
  setupComponentTest('scoring-panel', {
    integration: true
  });

  const assessmentWithTrophy = {course : {isAdaptive : true}};

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#scoring-panel}}
    //     template content
    //   {{/scoring-panel}}
    // `);

    this.render(hbs`{{scoring-panel}}`);
    expect(this.$()).to.have.length(1);
  });

  describe('view with a trophy', function () {

    beforeEach(() => {
      this.set('assessment', assessmentWithTrophy);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    })

    it('should display the won trophy', function () {
      // then
      expect(this.$('.scoring-panel_trophy-svg'));
      expect(this.$('.scoring-panel_trophy-level'));
      expect(this.$('.scoring-panel_trophy-bêta'));
    });

    it('should display the congratulations', function () {
      // then
      expect(this.$('.scoring-panel_congrats-course-name'));
      expect(this.$('.scoring-panel_congrats-felicitations'));
      expect(this.$('.scoring-panel_congrats-scoring'));
      expect(this.$('.scoring-panel_congrats-beta'));
    });
  });
});
