"use strict"

const wordForm = document.getElementById("charactersForm");

wordForm.addEventListener("submit", countCharacters);

function countCharacters() {
    const word = document.getElementById("word").value;
    const totalCharacters = word.split(" ");
    let charactersCounter = 0;
    totalCharacters.forEach((eachWord) => {
        const numberOfCharacters = eachWord.length;
        charactersCounter += numberOfCharacters;
    })
    alert(`Number of characters of this word: ${charactersCounter}`);
}
