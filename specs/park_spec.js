const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('park', function(){
let park;
let dinosaur;

beforeEach(function(){
  park = new Park();
  dinosaur1 = new Dinosaur("Velociraptor", 1);
  dinosaur3 = new Dinosaur("Tyrannosaurus", 3);


})

it('enclosure should start empty', function(){
  assert.strictEqual(park.enclosure.length, 0);
});

it('add dinosaur to enclosure', function(){
  park.addDinoToEnclosure(dinosaur1);
  assert.strictEqual(park.enclosure.length, 1);
});

it('removes dinosaur by type', function(){
  park.addDinoToEnclosure(dinosaur1);
  park.addDinoToEnclosure(dinosaur1);
  park.addDinoToEnclosure(dinosaur3);
  park.addDinoToEnclosure(dinosaur3);
  park.removeDinoByName("Tyrannosaurus");
  assert.strictEqual(park.enclosure.length, 2);


})

it('returns a list of dinosaurs with more than two offspring', function(){
  park.addDinoToEnclosure(dinosaur1);
  park.addDinoToEnclosure(dinosaur1);
  park.addDinoToEnclosure(dinosaur3);
  park.addDinoToEnclosure(dinosaur3);
  park.findDinosWithMoreThanTwoBabies();
  assert.strictEqual(park.countWithMoreThan2Babies, 2);

})

});
