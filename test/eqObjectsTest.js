const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

//test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true); // => true
// assert.deepEqual(eqObjects(cd, cd2), false); // => false