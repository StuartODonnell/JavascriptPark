const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
// const Park = require('../park.js');

describe('Dinosaur', function(){

let dinosaur;
// let park;

beforeEach(function(){
  dinosaur = new Dinosaur("Tyrannosaurus", 3);
  // bottle = new Park();
})

it('dinosaur should have a type', function(){
  assert.strictEqual(dinosaur.type, "Tyrannosaurus")
});

});
