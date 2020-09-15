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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅ Assertation Passed: the two arrays are the same!");
  } else {
    console.log("🛑🛑🛑 Assertation Failed: The two arrays are different");
  }
};

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);