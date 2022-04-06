`use strict`

//normal version
// for (let i = 1; i <= 100; i++) {
//     if ((i % 5 == 0) && (i % 3 == 0)) {
//         console.log(`FizzBuzz`);
//     } else if (i % 5 == 0) {
//         console.log(`Buzz`)
//     } else if (i % 3 ==0) {
//         console.log(`Fizz`) 
//     } else {
//         console.log(i);
//     }
// }

//ternary if
for (let i = 1; i <=100; i++) {
    i % 5 == 0 && i % 3 == 0 ? console.log(`FizzBuzz`) : (i % 5 == 0 ? console.log(`Buzz`) : (i % 3 == 0 ? console.log(`Fizz`) : console.log(i)))
}