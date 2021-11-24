// HELPER FUNCTION
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

const eqObjects = function(actual, expected) {
  let actualSize = 0;
  let expectedSize = 0;

  for (const key in actual) {
    actualSize++;
    if (actual[key] !== expected[key] // check primitive
      && (Array.isArray(actual[key]) && Array.isArray(expected[key]) && !eqArrays(actual[key], expected[key])) // check array
      && (typeof(actual) && typeof(expected) && !eqObjects(actual[key], expected[key]))) { // check object using recursive call

      return false;
    }
  }
  for (const keyOfExpected in expected) {
    expectedSize++;
  }
  return actualSize === expectedSize;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import utl lib inspect
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST PRIMITIVE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

// TEST ARRAY
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

// TEST OBJECT
assertObjectsEqual({ab, abc}, {abc, ab}); // => true
assertObjectsEqual({abc, cd}, {abc, abc}); // => false
