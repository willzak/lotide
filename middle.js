const eqArrays = require('./eqArrays');

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

module.exports = middle;