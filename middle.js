assertArraysEqual = require("./assertArraysEqual");


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

module.exports = middle;