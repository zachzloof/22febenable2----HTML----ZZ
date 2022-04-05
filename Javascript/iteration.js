`use strict`

// ITERATION

// LOOPS

// FOR

// USE A COUNTER
// run until a condition is NO LONGER met
for(let i = 0; i < 5; i++) {
    console.log(`i=${i}`);
}

// WHILE

// work with booleans 
// run until a boolean is false

let condition = true;
let increment = 0;

while(condition) {
    console.log(`increment me`);
    increment++;
    
    if(increment == 3) {
        condition = false;
    }

}

// DO-WHILE
// like a while loops but always runs AT LEAST once

let a = false;

do {
    console.log(`we are running`);
} while (a);

// SWITCH CASES

// run until a BREAK or a RETURN

let num = 1;

switch(num) {
    case 0:
        console.log(`num = ${num}`);
        break;
    case 1:
        console.log(`num = ${num}`);
        num++
    case 2:
        console.log(`num = ${num}`);
        num++
    case 3:
        console.log(`num = ${num}`);
        break;
    default:
        console.log(`out of scope`);
}


// SAME THING 
let i = 2;
while(i<=6) {
    console.log(i+1);
    i = i + 2;
}

for(let i = 2; i <= 6; i=+ 2) {
    console.log(i+1)
}