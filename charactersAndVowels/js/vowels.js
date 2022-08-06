"use strict"

const vowelsForm = document.getElementById("vowelsForm");
const userSentence = document.getElementById("userSentence");
let vowelsArray = [];

vowelsForm.addEventListener("submit", splitString);

function splitString() {
    const sentence = userSentence.value;
    const stringToArray = sentence.split(" ");
    stringToArray.forEach((word) => {
        for(let index = 0; index < word.length; index++) {
            if(word[index] === "a" || word[index] === "e" || word[index] === "i" || word[index] === "o" || word[index] === "u") {
                if(!vowelsArray.includes(word[index])) {
                    vowelsArray.push(word[index]);
                }
            }
        }
        outputsVowelsResults();
    })
}
function outputsVowelsResults() {
    vowelsArray.forEach((vowel) => {
        console.log(vowel);
    })
}



