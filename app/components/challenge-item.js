import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['challenge-item'],
  attributeBindings: ['challenge.id:data-challenge-id']
});
