"use strict"

// exercise: calculate cost food

// variables
const foodPrices = [12, 43, 1, 32, 22];
const totalPrice = foodPrices.reduce(sumPrices);
console.log(`The total price is ${totalPrice}`);

// function
function sumPrices(priceBefore, priceAfter) {
    return priceBefore + priceAfter;
}

// ---


// exercise: calculate the average of 5 random numbers with reduce method

// variables
let randomNumbers = new Array();
getRandomNumber(5, 10);
let totalNumbers = randomNumbers.reduce(sumNumbers);
const numbersAverage = getAverage(totalNumbers, randomNumbers.length);
console.log(`The 5 random numbers are: ${randomNumbers}`);
console.log(`The average of 5 random numbers is ${numbersAverage}`);

// functions
function getRandomNumber(min, max) {
    for(let repeat = 0; repeat < 5; repeat++) {
        const randomNumber = (Math.random() * (max - min)) + min;
        randomNumbers.push(Math.round(randomNumber));
    }
}
function sumNumbers(numberBefore, numberAfter) {
    return numberBefore + numberAfter;
}
function getAverage(total, length) {
    return Math.round(total / length);
}
