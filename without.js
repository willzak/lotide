//create function to make a new array without words that are inputed to be removed
const without = function(source, toRemove) {
  let res = [];

  for (let word of source) {
    let num = 0;

    for (let i = 0; i < toRemove.length; i++) {
      // check to see if the word is in the to remove list
      if (toRemove[i] === word) {
        num += 1;
      }
    }

    if (num === 0) {
      res.push(word); //if the word is in to remove num will be > 0
    }
  }

  return res;
};

module.exports = without;