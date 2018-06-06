const Dinosaur = require("./dinosaur.js");

const Park = function(){
  this.enclosure = [];
};

Park.prototype.addDinoToEnclosure = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinoByName = function(type){
  for (let i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].type === type) {
          this.enclosure.splice(i, 1);
          i--;
      }
  }
}

Park.prototype.findDinosWithMoreThanTwoBabies = function(){
  var counter = 0;
  for (i = 0; i < this.enclosure.length; i++){
    if(this.enclosure[i].numberOfOffspring >= 2){
    counter += 1;
  }
  return counter;
  }
}

module.exports = Park;
