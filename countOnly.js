const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

//report back how many instance of each string were found in allItems
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  let keys = Object.keys(itemsToCount);

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
     } else {
        results[item] = 1;
     }
    }
  }
  console.log(results)

  return results;
};

module.exports = countOnly;