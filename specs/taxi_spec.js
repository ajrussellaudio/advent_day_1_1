var Taxi = require('../taxi.js');
var assert = require('assert');

describe("Taxi", function() {

  var taxi = new Taxi();

  it("should return 5", function() {
    var input = "R2, L3";
    assert.equal( taxi.getDistance(input), 5 );
  });

  it("should return 2", function() {
    var input = "R2, R2, R2";
    assert.equal( taxi.getDistance(input), 2 );
  });

  it("should return 12", function() {
    var input = "R5, L5, R5, R3";
    assert.equal( taxi.getDistance(input), 12 );
  });

})