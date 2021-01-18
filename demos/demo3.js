/**
 * Code smells. Either use this-keyword
 */

class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
}

/**
 * Simplied calculator code
 */
const add = (num1, num2) => num1 + num2;

/**
 * Example where class can be used for the Calculator
*/
class Calculator1 {
    constructor(extra) {
        this.extra = extra;
    }

    add(num1, num2) {
        return num1 + num2 + this.extra;
    }
}

// Testing
const calculator = new Calculator();
const calculator1 = new Calculator1();

// eslint-disable-next-line no-console
console.assert.equal(calculator.add(1, 2), 3);

// eslint-disable-next-line no-console
console.assert.equal(add(1, 2), 3);

// eslint-disable-next-line no-console
console.assert.equal(calculator1(1, 1) === 2);
