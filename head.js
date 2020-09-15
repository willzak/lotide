const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertation Failed: " + actual + " !== " + expected);
  }
};

// Create a function to give the first item in an array
const head = function(array) {
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");