/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  stripInstruction
} from 'pix-live/helpers/strip-instruction';

describe('StripInstructionHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = stripInstruction(42);
    expect(result).to.be.ok;
  });
});
