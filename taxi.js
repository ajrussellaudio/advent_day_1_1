var Taxi = function() {
  this.position = { x: 0, y: 0 };
}

Taxi.prototype.getDistance = function( string ) {
  var directions = string.split(', ');
  return directions;  
};

module.exports = Taxi;