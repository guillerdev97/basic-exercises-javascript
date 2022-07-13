"use strict"

function passwordValidation() {
    const password = 3425;
    let counter = 0;
    while(counter < 3) {
        const askPassword = parseInt(prompt("Write your password", "Only numbers accepted..."));
        if(askPassword === password) {
            alert("Password is correct!");
            return;
        }
        if(askPassword != password) {
            counter++;
        }
    }
    alert("Password is incorrect!")
}
passwordValidation();
