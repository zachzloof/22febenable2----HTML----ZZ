// USE STRICT and CONSOLE

/* 
    use strict:
    forces us to write 'secure' javascript
    stops us using protected words, accidentally making 
    global variables etc.
*/
`use strict`;
//let let = 1;

console.log(`Hello world!`);

console.info(`this is info`);

console.warn(`This is a warning`);

console.error(`This is an error`);

// styling the console

//console.log(`%c` + `some text`, `color: black; background-color: white; font-size 30px; padding: 15px;` );

console.log(`%c` + `some text` + `%c` + `blue text`, `color: red;`, `color: blue;`);

//EXCERSIZE BELOW
//TASK 1

console.log(`Zach`);

console.info(`Zloof`);

console.warn(`Hackney`);

console.error(`Scorpio`);

let make = "Ford";
let model = "Mustang";

console.log(`My favourite car is the` + model + ` it is made by ` + make);

console.log(`%c` + `What a beautiful set of text`, `color: orange; font-family: fantasy; font-weight: bold; background-color: black; padding: 10px;`);

// VARIABLES AND DATA TYPES
/*
    in JavaScript data types are DYNAMIC
    and MUTABLE
    -> they are decided at runtime
    -> stored in memory as text

*/


/*
    we declare variables with let -> standard variable
    const -> constant
    var -> the old way we dont use anymore

    naming standard is camelCase
    $variableName
    _myVariable
*/

let variableOne = `hello`;
const variableTwo = 4;
var oldVariable = true;

// DATATYPES

/* 
    in JS there are two 'types' of types 
    primitives and objects

    objects have one datatype -> object
    primitives have everything else
    -> boolean, number, string, symbol, pull, higint, undefined
*/

let aBoolean = false;
let aNumber = 10.7541074;
let aString = `text123123@`;
let aBigInt = 999921492994292949n;
let aNull = null;
let anUndefined;

console.log(aBigInt);

// OBJECTS

// they are  a collection of properties
// they are mutable
// they are made up of key pairs

let myObject = {
    key : `value`,
    anotherKey : 12345
}
console.log(myObject);

//  STRING CONCATENATION
// Jjoining stirngs end to end and quite memory intensive

let string1 = `41 * 12 = `;
let result1 = 41 * 12;
console .log(string1 + result1);

// STRING INTERPOLATION 
// THIS USES ONLY ONE STRING
// USES STRING LITERALS CONTAINING PLACEHOLDERS
// SOMETIMES CALLED ` TEMPLATE LITERALS ` 
//THIS IS WAY BETTER

let string2 = `42 * 13 = ${42 * 13}`;
console.log(string2);

//TASK variables
string3 = `The total bill is $4000, we have paid $2348 we need to pay ${4000-2348}`;
console.log(string3);

