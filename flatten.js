// HELPER FUNCTIONS
const eqArrays = function(actual, expected) {
  if (actual.length != expected.length) {
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

const flatten = function(list) {
  let ret = [];
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      ret = ret.concat(flatten(list[i]));
    } else {
      ret.push(list[i]);
    }
  }
  return ret;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;