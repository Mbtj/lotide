// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// ACTUAL FUNCTION
const eqObjects = function(actual, expected) {
  let actualSize = 0;
  let expectedSize = 0;

  for (const key in actual) {
    actualSize++;
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  for (const keyOfExpected in expected) {
    expectedSize++;
  }

  return actualSize === expectedSize;
};

// TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false