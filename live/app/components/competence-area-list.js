import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Component.extend({

  classNames: ['competence-area-list'],

  competences: null,

  _sanitizedCompetences: Ember.computed('competences', function() {
    const _competences = this.get('competences');
    return _competences ? _competences : [];
  }),
  _competencesByArea: groupBy('_sanitizedCompetences', 'areaName'),
});
