const { assert } = require('chai');
const tail = require('../tail.js');



// TEST CASES
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// console.log(tail([1,2,3]));
// console.log(tail([]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] when  given ["Hello", "Lighthouse", "Labs"]',() => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

});