const { mediumspringgreen } = require("color-name");

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

module.exports = takeUntil;