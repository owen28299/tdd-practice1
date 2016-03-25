var SquareRoots = require("../square_roots.js");
var chai = require('chai');
var expect = chai.expect;

describe('Square Roots Function', function(){
  it("should be a function", function(){
    expect(SquareRoots).to.be.a('function');
  });

  it("should return false when a non-number, or non-integer, or below zero input is given", function(){
    expect(SquareRoots("frog")).to.equal(false);
    expect(SquareRoots({})).to.equal(false);
    expect(SquareRoots(Math.random() * 10)).to.equal(false);
    expect(SquareRoots( - Math.random() * 10)).to.equal(false);
    expect(SquareRoots( - 10)).to.equal(false);
  });


  it("should return the sum of the square root of every number from 1 to the number that was passed in", function(){
    expect(SquareRoots(5)).be.a('number');
    expect(SquareRoots(1)).to.equal(1);
    expect(SquareRoots(2)).to.equal(1 + Math.sqrt(2));
    expect(SquareRoots(5)).to.equal(1 + Math.sqrt(2) + Math.sqrt(3) + Math.sqrt(4) + Math.sqrt(5));
  });


});