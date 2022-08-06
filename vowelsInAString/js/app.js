"use strict"

// variables
const sentence = "paaaaastaaaa";
let vowelsArray = [];

// function call
splitString(sentence);

// functions
function splitString(str) {
    const stringToArray = str.split(" ");
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
    console.log("Vowels in this sentence:");
    vowelsArray.forEach((vowel) => {
        console.log(vowel);
    })
}



