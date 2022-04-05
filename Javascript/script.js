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