
const { assert } = require("chai");
const middle = require("../middle");

// // TEST CASES
// assertArraysEqual(middle([0]), []);
// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);

describe('#middle', () => {
  it('returns empty array when given a singleton', () => {
    assert.deepEqual(middle([0]), []);
  });

  it('returns [2] when given [1, 2, 3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it('returns [3, 4] when given [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});