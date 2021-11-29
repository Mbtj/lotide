const tail = require('../tail.js');
const assertEqual = require('../assertEqual');


// TEST CASES
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

console.log(tail([1,2,3]));
console.log(tail([]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!