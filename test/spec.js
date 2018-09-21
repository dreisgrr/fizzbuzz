var fizzbuzz = require("../src/index");

describe("fizz", function () {
  it("should print fizz", function () {
    var result = fizzbuzz(3);
    expect(result).toBe('Fizz');
  });

  it("should print buzz", function () {
    var result = fizzbuzz(5);
    expect(result).toBe('Buzz');
  });
  it("should print fizzbuzz", function () {
    var result = fizzbuzz(15);
    expect(result).toBe('FizzBuzz');
  });
  it("should print input", function () {
    var result = fizzbuzz(2);
    expect(result).toBe(2);
  });
}); 
