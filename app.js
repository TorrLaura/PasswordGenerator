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
 const lengthEl = document.querySelector (`#length`);
 const generateEl = document.querySelector (`#generate`);
 const clipboardEl = document.querySelector (`#clipboard`);

 function generatePassword (lower, upper, number, symbol, length){
}
    

// Example of generatePassword function.
// Using the starting value for when the page first loads
generatePassword(true, true, true, true, 10)

// Create the Password Variable

let generatedPassword = ``;

// Filter out unchecked options
// True and False values can be added together (True is 1 and false i 0)
// 
const typesCount = lower + upper + number + symbol;

// If user has not selected any of the four options, then display alert and return and return an empty string from the password displayed will just be an empty string.
if (typesCount === 0){
    alert (`Please select at least one option`);
    return ``;
}

// 
let typesArr = [
    [`lower`, lower], 
    [`upper`, upper],
    [`number`, number],
    [`symbols`, symbols]
];

// The filter method creates a new array with all the elements that "pass the test" implemented by the provided function. All the items that cause the function to return a boolean value of true when the function is run using the item as an argument for the item parameter in this example.
// Checking if the value for each item in the array is true or false. Also, removing the item from the array if it is false.
typesArr = typesArr.filter (item => {
    console.log(item[1]);
    return item[1];
});

console.log(`typesArr:` , typesArr);

// Loop over the length and call the generator function for each checked option.
// a. Building password with a for Loop
// NOTE:The value for "length" is the value selected for the length number input
for (i = 0; i < length; i += typesCount){
// One of the items in the updated/filtered version of the typesArr will be the value/argument passed into for the type parameter each time the anonymous arrow function is run/executed. 
typesArr.forEach(type => {
const funcName = type[0];
console.log(funcName);


// Accessing and running/executing a function in the randomFunctions object. Also, adding the value returned from the accessed function to the generatedPassword string variable.
generatedPassword += randomFunctions[funcName]();
console.log();
});
}

 // 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION
  // Removing extra characters if necessary (The above loop will create a password that may not match the length selected if that length is not a multiple of the number of options/checkboxes selected)
  const finalPassword = generatedPassword.slice(0, length);
  console.log(finalPassword);

  return finalPassword;


// Example of generatePassword function
// NOTE: Using the starting value for when the page first loads
generatePassword(true, false, true, false, 3);

// Event listener for when the "Generate Password" button is clicked
generateEl.addEventListener(`click`, () => {
  // Checking if the following options/checkboxes are selected/checked and setting the true or false values to the respective variables
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  // Accessing the value for the number input and changing the value from a string to a number
  // NOTE: The value returned from a number input is a string value
  const length = parseInt(lengthEl.value);

  console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);

// The generatePassword function takes the true/false values determined by the checkboxes as well as the number from the number input as arguments and returns a string (AKA password) which is set as the innerText value for the "result"(AKA Span) element.
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});
