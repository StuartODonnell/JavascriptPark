const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('park', function(){
let park;
let dinosaur;

beforeEach(function(){
  park = new Park();
  dinosaur = new Dinosaur();

})

it('enclosure should start empty', function(){
  assert.strictEqual(park.enclosure.length, 0);
})

});
