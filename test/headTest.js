const head = require('../head.js');
const assert = require('chai').assert;

// // Test cases


// console.log(head([]));
// console.log(head([3]));
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe('#head', () => {
  it('should return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

