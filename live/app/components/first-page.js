import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    const showOnly = this.get('showOnly');
    if (showOnly && Number.isInteger( parseInt(showOnly))) {
      this.set('model', this.get('model').slice(0, parseInt(showOnly)));
    }
  }
  
});
