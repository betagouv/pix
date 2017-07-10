import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['competence-by-area-item'],
  competenceArea: null,
  _competencesAreaName: Ember.computed('competenceArea.value', function() {
    const competenceAreaName = this.get('competenceArea.value');
    return (competenceAreaName) ? this.get('competenceArea.value').substr(3) : '';
  })
});
