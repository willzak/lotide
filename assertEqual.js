// Original assertEqual function
// const assertEqual = function(actual, expected) {
  // if (actual === expected) {
    // console.log("✅✅✅ Assertation Passed: " + actual + " === " + expected);
  // } else {
    // console.log("🛑🛑🛑 Assertation Failed: " + actual + " !== " + expected);
  // }
// };

// assertEqual function using Template literals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

// Test the function
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);