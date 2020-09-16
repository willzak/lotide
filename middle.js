const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

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

const middle = function(array) {
  let res = [];
  let size = array.length;

  if (size <= 2) {
    return res;
  } else if (size % 2 === 0) {
    res.push(array[(size / 2) - 1]);
    res.push(array[size / 2]);
    return res;
  } else if (size % 2 !== 0) {
    res.push(array[(size / 2) - 0.5]);
    return res;
  }
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]