/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  eq
} from 'pix-live/helpers/eq';

describe('EqHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = eq(42);
    expect(result).to.be.ok;
  });
});
