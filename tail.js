const assertEqual = require('./assertEqual');

// Create function to give the tail of an array

const tail = function(array) {
  let end = [];

  for (let i = 1; i < array.length; i++) {
    end.push(array[i]);
  }

  return end;
};

module.exports = tail;