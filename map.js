const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const words = ["ground", "control", "to", "major", "tom"];
const animals = ['dog', 'giraffe', 'cat', 'fish'];
const random = ['gdhjjd', 'cnhejj', 'tnskjsdns', 'mdh', 't'];

const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[0]);
const results3 = map(random, rand => rand[0]);

assertArraysEqual(results1, results2); // => should fail
assertArraysEqual(results1, results3); // => should pass
assertArraysEqual(results2, results2); // => should pass
