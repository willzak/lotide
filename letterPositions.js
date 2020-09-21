const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  //logic to update results here
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results)
  return results; 
};

module.exports = letterPositions;