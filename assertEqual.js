const assetEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertation Failed: " + actual + " !== " + expected);
  }
};

assetEqual("Lighthouse Labs", "Bootcamp");
assetEqual(1, 1);