const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const middle = require('../middle');

describe('#middle', () => {
  it('returns [] when given an array with 1 item', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] when given an array with 2 items', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [2] when given [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3] when given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [2, 3] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [3, 4] when given [1, 2, 3, 4, 5, 6', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});