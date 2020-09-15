const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertation Failed: " + actual + " !== " + expected);
  }
};

// Create function to give the tail of an array

const tail = function(array) {
  let end = [];

  for (let i = 1; i < array.length; i++) {
    end.push(array[i]);
  }

  return end;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!