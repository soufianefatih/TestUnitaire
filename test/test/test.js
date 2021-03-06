var calc = require("../index");
var assert = require("assert");

console.log(calc);
describe("calculator", function () {
  it("should add two numbers", function (done) {
    var total = calc.add(5,2);
    assert.equal(total, 6);
    done();
  }),
  it("should subtract two numbers", function (done) {
    var total = calc.subtract(5,2);
    assert.equal(total, 3);
    done();
  }),
  it("should divise two numbers", function (done) {
    var total = calc.divise(5,2);
    assert.equal(total, 2.5);
    done();
  }),
  it("should multiply two numbers", function (done) {
    var total = calc.multiply(5,2);
    assert.equal(total, 10);
    done();
  })

});
