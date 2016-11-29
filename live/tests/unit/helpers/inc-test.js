/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  inc
} from 'pix-live/helpers/inc';

describe('IncHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = inc(42);
    expect(result).to.be.ok;
  });
});
