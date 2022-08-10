"use strict"

// exercise: sort the prices in descendent order
let foodPrices = [12, 2, 34, 43, 11, 22];
foodPrices.sort(orderByDescending);
console.log(foodPrices);
// function
function orderByDescending(priceBefore, priceAfter) {
    return priceAfter - priceBefore;
}

// ---

// exercise: sort the prices in ascendent order
let carPrices = [1231, 43223, 54321, 12321];
carPrices.sort(orderByAscending);
console.log(carPrices);
//function
function orderByAscending(priceBefore, priceAfter) {
    return priceBefore - priceAfter;
}
