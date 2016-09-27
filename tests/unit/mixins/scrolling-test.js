/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ScrollingMixin from 'pix-live/mixins/scrolling';

describe('ScrollingMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ScrollingObject = Ember.Object.extend(ScrollingMixin);
    let subject = ScrollingObject.create();
    expect(subject).to.be.ok;
  });
});
