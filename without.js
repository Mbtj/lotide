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

const without = function(source, itemsToRemove) {
  let subArray = []
  for (const item of source) { // iterate through source
    let pick = true; // gives us whether an element is to be added to subArray
    for (const element of itemsToRemove) {
      if (item === element) {
        pick = false;
      }
    }
    pick ? subArray.push(item) : {};
  }

  return subArray;
};

// TEST CASES
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);