const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅ Assertation Passed: the two arrays are the same!");
  } else {
    console.log("🛑🛑🛑 Assertation Failed: The two arrays are different");
  }
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

assertArraysEqual(letterPositions("hello").e, [1]);