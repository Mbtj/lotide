const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TEST FUNCTIONS
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

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word.length), [6,7,2,5,3]);
assertArraysEqual(map(Array(5).keys(), x => x * x), [0, 1, 4, 9, 16]);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

module.exports = map;