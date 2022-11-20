"use strict";

// dom elements
const redBox = document.getElementById("red");
const redBtn = document.getElementById("red-btn");

const greenBox = document.getElementById("green");
const greenBtn = document.getElementById("green-btn");

const yellowBox = document.getElementById("yellow");
const yellowBtn = document.getElementById("yellow-btn");

// variables
let redExe = "white";
let greenExe = "white";
let yellowExe = "white";

// click events
redBtn.addEventListener("click", function () {
  if (redExe === "white") {
    redBox.style.backgroundColor = "red";

    redExe = "red";

    return;
  }

  if (redExe === "red") {
    redBox.style.backgroundColor = "white";

    redExe = "white";

    return;
  }
});

greenBtn.addEventListener("click", function () {
  if (greenExe === "white") {
    greenBox.style.backgroundColor = "green";

    greenExe = "green";

    return;
  }

  if (greenExe === "green") {
    greenBox.style.backgroundColor = "white";

    greenExe = "white";

    return;
  }
});

yellowBtn.addEventListener("click", function () {
  if (yellowExe === "white") {
    yellowBox.style.backgroundColor = "yellow";

    yellowExe = "yellow";

    return;
  }

  if (yellowExe === "yellow") {
    yellowBox.style.backgroundColor = "white";

    yellowExe = "white";

    return;
  }
});
