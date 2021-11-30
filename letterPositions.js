const letterPositions = function(string) {
  let ret = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      ret[string[i]] === undefined ? ret[string[i]] = [i] : ret[string[i]].push(i);
    }
  }

  return ret;
};

const arg = process.argv[2];

console.log(letterPositions(arg));

module.exports = letterPositions;