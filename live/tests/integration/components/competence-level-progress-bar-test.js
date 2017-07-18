import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | competence level progress bar', function() {
  setupComponentTest('competence-level-progress-bar', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#competence-level-progress-bar}}
    //     template content
    //   {{/competence-level-progress-bar}}
    // `);

    this.render(hbs`{{competence-level-progress-bar}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should indicate the level passed to the component at the end of the progress bar', function() {
    // given
    const level = 5;
    this.set('level', level);

    // when
    this.render(hbs`{{competence-level-progress-bar level=level}}`);

    // then
    expect(this.$('.competence-level-progress-bar__level').data('level')).to.be.equal(level);
    expect(this.$('.competence-level-progress-bar__level-indicator').text().trim()).to.be.equal(level.toString());
  });
});
