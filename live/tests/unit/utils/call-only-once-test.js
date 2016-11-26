/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import callOnlyOnce from 'pix-live/utils/call-only-once';

describe('callOnlyOnce', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = callOnlyOnce();
    expect(result).to.be.ok;
  });
});
