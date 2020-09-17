const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  //check if same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  //check if values are equal
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });