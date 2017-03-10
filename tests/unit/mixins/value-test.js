import Ember from 'ember';
import ValueMixin from 'pix/mixins/value';
import { module, test } from 'qunit';

module('Unit | Mixin | value');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValueObject = Ember.Object.extend(ValueMixin);
  let subject = ValueObject.create();
  assert.ok(subject);
});
