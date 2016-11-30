/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  propertyOf
} from 'pix-live/helpers/property-of';

describe('PropertyOfHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = propertyOf(42);
    expect(result).to.be.ok;
  });
});
