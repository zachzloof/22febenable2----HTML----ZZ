`use strict`

//Part 1
// let flag = true;
// let a = 100;
// while (flag) {
//     console.log(a)
//     a++
//     if (a > 200) {
//         flag = false;
//     }
// }

// FOR VERSION
// for (let a = 100; a <= 200; a++) {
//     console.log(`a = ${a}`);
//   }


//Part 2
// let flag2 = true;
// let a2 = 100;
// while (flag2) {
//     if (a2 % 2 == 0) {
//         console.log(`-`);
//     } else {
//         console.log(`*`);
//     }
//     a2++
    
    
//     if (a2 >= 200) {
//         flag = false;
//     }
// }


//FOR VERSION 

// for (let a = 100; a <= 200; a++) {
//     if (a % 2 == 0) {
//       console.log("-");
//     } else {
//       console.log("*");
//     }
//   }

// //Part 3
// let flag3 = true;
// let a3 = 1;
// let count = 0;
// while (flag3) {
//     console.log(a3);
//     if (a3 == 10) {
//         count++
//         a3 = 0;
//     };
//     a3++;
//     if (count == 10) {
//         flag3 = false;
//     };

// };

// FOR VERSION

// for (let i = 0; i < 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(j);
//     }
//  }  

//Part 5
// let a4 = `friday`;
// switch (a4) {
//     case `monday`:
//         console.log(`It is monday ma doodes`);
//         break;
//     case `tuesday`:
//         console.log(`It is tuesday ma doodes`);
//         break;
//     case `wednesday`:
//         console.log(`It is wednesday ma doodes`);
//         break;
//     case `thursday`:
//         console.log(`It is thursday ma doodes`);
//         break;
//     case `friday`:
//         console.log(`It is friday ma doodes`);
//     case `saturday`:
//         console.log(`It is saturday ma doodes`);
//     case `sunday`:
//         console.log(`It is sunday ma doodes`);
//     default: 
//         console.log(`invalid range`);
// } 
// THIS WAS DONE WRONG

// THIS IS THE REAL SOLUTION:
let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}