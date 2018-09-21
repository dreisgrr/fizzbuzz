class FizzBuzz {
    constructor(rules, start, end) {
        this.rules = rules;
        this.start = start;
        this.end = end;
    }

    process() {
        for (var i=this.min; i < this.max; i++) {
            fizzbuzzit(i);
        }
    }

    fizzbuzzit(number) {
        const divisible = this.rules.some((rule) => {
            return rule.checkDivisibility(number);
          });
        if (!divisible) return number;  
    }
}

class Rules {
    constructor(number, message) {
        this.number = number;
        this.message = message;
    }
    checkDivisibility(input) {
        if(input % this.number == 0) return this.message;
    }
}

var sampleFizzBuzz = new FizzBuzz (
    [
        new Rules(3, 'Fizz'),
        new Rules(5, 'Buzz'),
        new Rules(15, 'FizzBuzz')
    ],
    1,
    30
);
function test() { 
    sampleFizzBuzz.process();
}
module.exports = test;

// function isDivisibleByThree(number) {
//     var result = '';
//     if(number%3==0) result = 'Fizz';
//     return result;
// }

// function isDivisbleByFive(number) {
//     var result = '';
//     if(number%5==0) result = 'Buzz';
//     return result;
// }

// function isDivisibleBy15(number) {
//     var result = '';
//     if(number%15==0) result = 'FizzBuzz';
//     return result;
// }

// module.exports = fizzbuzz;

// fizzbuzz()