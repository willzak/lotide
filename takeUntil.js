const takeUntil = function(array, callback) {
  let res = [];

  for (let item of array) {
    if (!callback(item)) {
      res.push(item);
    } else {
      break;
    }
  }
  return res;
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(data1, results1);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(data2, results2);
console.log(results2);