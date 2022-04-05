`use strict`

// CONDITIONALS

//TRUTHY AND FALSEY
/*
    fALSEY:
    FALSE
    0
    `` '' ""
    undefined
    null
    n
    NaN -> not a number

    Truthy:
    EVERYTHING ELSE
*/

// IF STATEMENTS

// check a condition, then run a code if it is met

let a = 2;

if (a == 0) {
    console.log(`a is currently ${a}`);
} else if (a) {
    console.log(`a is truthy`);
} else {
    console.log(`a is falsey`);
}

// TERNARY IF
// shorthand version of an IF ELSE statement

let x = 1;

if (x == 1) {
    console.log(`hello`);
} else {
    console.log(`goodbye`);
}

x == 1 ? console.log(`hello`) : console.log(`goodbye`);

// EQUALITY AND TYPE 

// type is mutable in JS
// so you can compare different data types!

1 == `1` ? console.log(true) : console.log(false);

// JS is mutating the type so that ONE is equal to ONE
// IT is checking the VALUE not the TYPE

// If you want to also evaluate the type

2 === `2` ? console.log(true) : console.log(false);


// EXCERSIZE TASK 5
// 1. true, false
// 2.false, true
//3.
let age = 24;
if (age >= 18 && age <= 65) {
    console.log(`You are within the age bracket`);
} else if (age > 65) {
    console.log(`You are too old sorry`);
} else {
    console.log(`You are underage`);
}
// 4.
age > 50 ? console.log(`You are eligible for our over 50's offer`) : console.log(`You are not eligible for our over 50's offer`);