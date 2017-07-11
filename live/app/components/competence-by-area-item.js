import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';

export default Ember.Component.extend({

  classNames: ['competence-by-area-item'],
  competenceArea: null,
  _competencesAreaName: Ember.computed('competenceArea.value', function() {
    const competenceAreaName = this.get('competenceArea.value');
    return (competenceAreaName) ? this.get('competenceArea.value').substr(3) : '';
  }),
  _competencesSortedList: Ember.computed('competenceArea.items', function() {
    const competencesList = this.get('competenceArea.items');
    const sortedList = _.sortBy(competencesList, [function(o) {
      return o.get('index');
    }]);
    return sortedList;
  })
});
