import Ember from 'ember';

export default Ember.Component.extend({
  isAuthorized:true,
  color: Ember.computed('isAuthorized', function () {
    if (this.get('isAuthorized')) {
      return '#67b972';
    } else {
      return '#b96767';
    };
  }),
  text: Ember.computed('isAuthorized', function () {
    if (this.get('isAuthorized')) {
      return 'Internet et outils autorisés pour cette question';
    } else {
      return 'Internet et outils non autorisés pour cette question';
    };
  })

});
