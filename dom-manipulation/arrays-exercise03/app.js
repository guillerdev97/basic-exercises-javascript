"use strict";

// dom element
const fruitSection = document.getElementById("fruit-section");

// variable
const fruits = ["apples", "oranges", "bananas", "strawberries"];

// insert content
fruits.forEach((el) => {
  const fruitBox = createFruitBox();

  fruitBox.innerHTML = el;

  fruitSection.appendChild(fruitBox);
});

// function
function createFruitBox() {
  const fruitBox = document.createElement("p");

  fruitBox.classList.add("fruit-box");

  return fruitBox;
}
