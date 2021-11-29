head = require('../head.js')

// Test cases


console.log(head([]));
console.log(head([3]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");