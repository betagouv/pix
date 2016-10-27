/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  convertToHtml
} from 'pix-live/helpers/convert-to-html';

describe('ConvertToHtmlHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = convertToHtml(42);
    expect(result).to.be.ok;
  });
});
