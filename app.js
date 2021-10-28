// PASSWORD GENERATOR

// Character Generator Functions

function randomIndex(str){
    return Math.floor(Math.random()* str.lenght);
}

function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`
    return letters [randomIndex(letters)];
}

function getRandomUpper(){
    const letter = getRandomLower ();

    return letter.toUpperCase();
}

function getRandomNumber (){
    const numbers = `0123456789`;
    return numbers [randomIndex(numbers)];
}

function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    return symbols [randomIndex(symbols)];
}

// Object to store all the character generator functions

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Selecting the DOM elements
 const resultEl = document.querySelector (`#result`);
 const lowercaseEl = document.querySelector (`#lowercase`);
 const uppercaseEl = document.querySelector (`#uppercase`);
 const numbersEl = document.querySelector (`#numbers`);
 const symbolsEl = document.querySelector (`#symbols`);
 const lenghtEl = document.querySelector (`#lenght`);
 const generateEl = document.querySelector (`#generate`);
 const clipboardEl = document.querySelector (`#clipboard`);
