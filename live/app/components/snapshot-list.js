import Ember from 'ember';

export default Ember.Component.extend({

  organization: null,
  _snapshots: null,
  _hasSnapshots: Ember.computed('_snapshots', function() {
    return this.get('_snapshots') != null && this.get('_snapshots.length') > 0;
  }),

  init() {
    this._super(...arguments);
    this.get('organization.snapshots').then(function(snapshots) {
      this.set('_snapshots', snapshots);
    }.bind(this));
  }

});
