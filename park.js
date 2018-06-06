const Park = function(){
  this.enclosure = [];
};

Park.prototype.addDinoToEnclosure = function(dinosaur){
  this.enclosure.push(dinosaur);
}

module.exports = Park;
