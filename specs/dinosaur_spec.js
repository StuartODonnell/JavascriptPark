const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
// const Park = require('../park.js');

describe('Dinosaur', function(){

let dinosaur;
// let park;

beforeEach(function(){
  dinosaur1 = new Dinosaur("Velociraptor", 1);
  dinosaur3 = new Dinosaur("Tyrannosaurus", 3);

  // park = new Park();
})

it('dinosaur should have a type', function(){
  assert.strictEqual(dinosaur3.type, "Tyrannosaurus")
});

it('dinosaur has a number of offspring', function(){
  assert.strictEqual(dinosaur1.numberOfOffspring, 1)
})
});
