`use strict`

// FUNCTIONS
/*
    a block of code that does a thing!
    they are envoked (or run) when `called`
    DRY principles (dont repeat yourself)
    they can take arguments
    globally scoped
*/

// function hello(message) {
//     console.log(message);
// }

// hello(false);

// RETURNS

// when a function reaches a return it stops 

let bye = false;

function goodbye() {
    console.log(`goodbye`);
    return bye = true;
    console.log(`You cant see me`);
}
// console.log(bye); // returns false
// goodbye(); // returns `goodbye`
// console.log(bye); returns true

// VARIABLE RETURNS

function sum(a, b) {
    return a + b;
}

console.log(sum(11, 11));


// ARROW FUNCTIONS

function log(data) {
    console.log(data);
}
// // OR
// log = (data) => {
//     console.log(data);
// }

// //OR 

// log = (data) => {console.log(data)};

// //OR

// log = data => console.log(data);

//EXCERSIZE
//1.
function subtract(a, b) {
    return a-b;
}

//2.
function welcome (name, age, gender) {
    console.log(`My name is ` + name + `, i am ` + age + ` years old and of gender ` + gender);
}

//3.
powerUp = (a, b) => {console.log(`The answer is: ` + Math.pow(a, b))};