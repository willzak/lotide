const assertEqual = require('./assertEqual');

// create function eqArrays that returns true or false based on a perfect match between arrays

const eqArrays = function(arr1, arr2) {
  // check if arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if items in arrays are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;