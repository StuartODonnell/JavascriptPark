const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('dinosaur', function(){

let dinosaur;
let park;

beforeEach(function(){
  dinosaur = new Dinosaur();
  bottle = new Park();
})

it('dinosaur should have a name', function(){
  assert.strictEqual(dinosaur.type, "Tyrannosaurus")
})
  
})
