// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  let ret = {} // this will help us get distinct letters

  for (const char of word) {
    if (char !== ' '){
      (ret[char] === undefined) ? ret[char] = 1 : ret[char]++;
    }
  }

  return ret;
};

const arg = process.argv[2];

console.log(countLetters(arg));
