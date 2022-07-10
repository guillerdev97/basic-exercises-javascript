"use strict"
import { Calculator } from "./calculatorClass.js";

// exercise01
const answer01 = document.getElementById("answer01");
writeAndConsoleHelloWorld();

// exercise02
const answer02 = document.getElementById("answer02");
writeSumResult(3, 5);

// exercise03
const answer03 = document.getElementById("answer03");
calculate(3, 5);

// exercise04
const answer04 = document.getElementById("answer04");
getUserNameByPrompt();

// exercise05
const answer05 = document.getElementById("answer05");
const btnUserName = document.getElementById("btnUserName");
btnUserName.addEventListener("click", getUserNameByInput);

// exercise06
const answer06 = document.getElementById("answer06");
const btnSum =document.getElementById("btnSum");
btnSum.addEventListener("click", writeSumResultByInput);

function writeAndConsoleHelloWorld() {
    const text = "Hello World!";
    answer01.innerHTML = text;
    console.log("Hello World!");
}
function writeSumResult(num1, num2) {
    const sumResult = num1 + num2;
    const message = `El resultado de ${num1} + ${num2} es ${sumResult}.`;
    answer02.innerHTML = message;
    console.log(message);
}
function calculate(num1, num2) {
    const calculator = new Calculator(num1, num2);
    const message01 = calculator.sum();
    const message02 = calculator.multiply();
    answer03.innerHTML = `
        ${message01}<br>
        ${message02}
    `;
    console.log(`${message01}\n${message02}`);
}
function getUserNameByPrompt() {
    const userName = prompt("What is your name?", "Write your name please...");
    const message = `Hello ${userName}!`;
    answer04.innerHTML = message;
}
function getUserNameByInput() {
    const userName = document.getElementById("userName").value;
    const message = `Hello ${userName}!`;
    answer05.innerHTML = message;
}
function writeSumResultByInput() {
    const num1 = parseInt(document.getElementById("firstNumber").value);
    const num2 = parseInt(document.getElementById("secondNumber").value);
    const sumResult = num1 + num2;
    const message = `The result of sum ${num1} + ${num2} is ${sumResult}`;
    answer06.innerHTML = message;
}