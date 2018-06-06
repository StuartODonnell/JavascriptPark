const Dinosaur = require("./dinosaur.js");

const Park = function(){
  this.enclosure = [];
};

Park.prototype.addDinoToEnclosure = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinoByName = function(type){
// for (let i = this.enclosure.length -1; i>+0; i--){
//   if(this.enclosure[i].type ===){
//     this.enclosure.splice(i,1);
//   }
// }

  for (let i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].type === type) {
          this.enclosure.splice(i, 1); //splices at that index point for a length of 1 space
          i--;
      }
  }
};

// i-- reverses the loop direction

Park.prototype.findDinosWithMoreThanTwoBabies = function(){
  var counter = 0;
  for (let i = 0; i < this.enclosure.length; i++){
    if(this.enclosure[i].numberOfOffspring >= 2){
    counter += 1;
  }
  return counter;
  }
}

module.exports = Park;
