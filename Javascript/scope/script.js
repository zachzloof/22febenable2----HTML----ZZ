`use strict`

//SCOPE

//in JS

//TWO main types of scope
// LOCAL and GLOBAL

// LOCAL SCOPE

//FUNCTION SCOPE
// variables that are declared inside a function and are not accessible from outside the function



let foo = () => {
    let bar = `hello world`;
    // console.log(bar);
}
foo();

//console.log(bar);

// BLOCK SCOPE
//VARIABLES declared inside a block and are only accessible from inside the block

{
    let x = 1;
    
}
//console.log(x);

// unless you declared your variables using the VAR keyword, and this is one of the reasons why we no longer use VAR

{
    var y = 2;
}

// console.log(y);

//GLOBAL SCOPE

// Automatically Global 

// if we dont declare a variable but we reference one inside a block 
// it is automatically created and added to the global scope
// THIS ONLY WORKS WITHOUT STRICT, STRICT STOPS THIS HAPPENING AUTOMATICALLY
let globalVar = () => {
    greeting = `Hello`;
}

globalVar();

// console.log(greeting);

// this is irrelevant as we use strict

// STANDARD GLOBAL 

//declaring a variable outside of a code block
// it can be accessed from anywhere

let a = `a`;

console.log(a);

{
    console.log(`a is = ${a}`);
}

let b = (a) => {
    console.log(`function b gives us ${a}`);
}

b(a);

// HOW JAVASCRIPT LOOKS FOR VARIABLES

//1. LOCAL (inside a block)
//2. GLOBAL (Outside of a block)
//3. If none exists create and add to global scope (ARRESTED BY STRICT)


