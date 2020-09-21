const assertEqual = require('./assertEqual');

//takes in a sentence as a string and returns a count of each letter that appears
const countLetters = function(sentence) {
  let count = {};
  sentence = sentence.replace(" ", "");

  for (let letter of sentence) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters;