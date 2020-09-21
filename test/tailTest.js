const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Check the original array
// tail(words); // no need to capture the return value since we are not checking it
// assert(words.length, 3); // original array should still have 3 elements!

describe('#tail', () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  })
});