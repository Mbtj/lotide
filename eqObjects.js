// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// HELPER FUNCTIONS
const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length != expectedArr.length) {
    return false;
  } else {
    for (let i = 0; i < actualArr.length; i++) {
      if (actualArr[i] !== expectedArr[i]) {
        return false;
      }
    }
  }
  return true; // arrays have passed all cases.
}


// ACTUAL FUNCTION
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

// TEST PRIMITIVE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// TEST ARRAY
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

// TEST OBJECT
assertEqual(eqObjects({ab, abc}, {abc, ab}), true); // => true
assertEqual(eqObjects({abc, cd}, {abc, abc}), false); // => false