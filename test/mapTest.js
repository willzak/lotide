const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const animals = ['dog', 'giraffe', 'cat', 'fish'];
const random = ['gdhjjd', 'cnhejj', 'tnskjsdns', 'mdh', 't'];

const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[0]);
const results3 = map(random, rand => rand[0]);

assertArraysEqual(results1, results2); // => should fail
assertArraysEqual(results1, results3); // => should pass
assertArraysEqual(results2, results2); // => should pass