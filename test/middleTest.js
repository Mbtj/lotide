
const middle = require("../middle");

// TEST CASES
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);