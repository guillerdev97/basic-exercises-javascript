"use strict";

const redBox = document.getElementById("red");
const redBtn = document.getElementById("red-btn");

const greenBox = document.getElementById("green");
const greenBtn = document.getElementById("green-btn");

const yellowBox = document.getElementById("yellow");
const yellowBtn = document.getElementById("yellow-btn");

redBtn.addEventListener("click", function () {
  if(redBox.style.backgroundColor = "white") {
    redBox.style.backgroundColor = "red";
  }

  if(redBox.style.backgroundColor = "red") {
    redBox.style.backgroundColor = "white";
  }
});
