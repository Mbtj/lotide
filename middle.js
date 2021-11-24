// HELPER FUNCTIONS
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true; // arrays have passed all cases.
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCITON
const middle = function(list) {
  let index = Math.floor((list.length - 1) / 2);
  // base cases
  if (list.length < 3) {
    return [];
  } else {
    if (list.length % 2 === 1) {
      return [list[index]];
    } else {
      return [list[index], list[index + 1]];
    }
  }
};

// TEST CASES
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);