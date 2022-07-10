"use strict"

export class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        const sumResult = this.num1 + this.num2;
        return `The result of sum ${this.num1} + ${this.num2} is ${sumResult}.`
    }
    substract() {
        const substractResult = this.num1 - this.num2;
        return `The result of substract ${this.num1} - ${this.num2} is ${substractResult}.`
    }
    multiply() {
        const multiplyResult = this.num1 * this.num2;
        return `The result of multiply ${this.num1} * ${this.num2} is ${multiplyResult}.`
    }
    divide() {
        const divideResult = this.num1 / this.num2;
        return `The result of divide ${this.num1} / ${this.num2} is ${divideResult}.`
    }
}