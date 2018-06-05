const Dinosaur = function(type, numberOfOffspring){
  this.type = type;
  this.numberOfOffspring = numberOfOffspring;
};

const dinosaur1 = new Dinosaur("Velociraptor", 1);
const dinosaur2 = new Dinosaur("Triceratops", 2);
const dinosaur3 = new Dinosaur("Tyrannosaurus", 3);
const dinosaur4 = new Dinosaur("Megalodon", 4);
const dinosaur5 = new Dinosaur("Archeopteryx", 5);
const dinosaur6 = new Dinosaur("Pteradactyl", 6);
const dinosaur7 = new Dinosaur("Barney", 7);


module.exports = Dinosaur;
