import Ember from 'ember';

const AppMenu = Ember.Component.extend({
  didInsertElement(){
    this.set('items', [
      {
        title: 'projet',
        href: '/projet'
      }
    ]);
  }

});

AppMenu.reopenClass({
  positionalParams: 'items'
});

export default AppMenu;
