`use strict`
//OBJECTS, ARRAYS AND JSON

// OBJECTS

// collection of data in ANY order
// MADE UP OF KEY PAIRS
let animal = new Object();
// console.log(typeof(animal));

animal[`name`] = `Clifford`;
animal[`type`] = `Dog`;
animal[`size`] = `Big`;

// console.log(animal);

animal.colour = `red`;
// console.log(animal);

//LITERAL NOTATION

let vehicle = {
    type : `bike`,
    seats : 1,
    wheels : 2
}

// console.log(vehicle);
// console.log(vehicle.seats);

//DATA can be stored in an ARRAY
let garage = [
    vehicle,
    {type: `car`, seats:5,wheels:4}
]
// console.log(garage);

// lets do some looping through an array

// let x = [ `a`, `b`, `c`, `d`, `e`];
// for (let i = 0; i<x.length; i++) {
//     console.log(x[i]);
// }

//ENHANCED LOOPS
//wwork well with arrays of items and will always loop through EVERY ITEM

// for (let item of x) {
//     console.log(item);
// }

// specific methods to act on ARRAYS

// reverse
// console.log(x.reverse()); // original will be mutated

// //the join method
// console.log(x.join(` the next letter is `));



// JSON

// JavaScript Object Notation
// Literal notation foR JS objects

let newJSON = {
    name : `Cameron`,
    age : 29
}

// to convert JSON to different datatypes we have to use OVERLOADED methods

//JSON to string
let str = JSON.stringify(newJSON);

// console.log(newJSON);
// console.log(str);

let person = JSON.parse(`{"name":"ellie","age":43}`);
// console.log(person);


//EXCERSIZE
//1.
let darthVader = new Object();
darthVader[`allegiance`] = `empire`;
darthVader[`weapon`] = `lightsaber`;
darthVader[`sith`] = true;
//2.
console.log(`Darth Vader's allegiance is ` + darthVader.allegiance);
console.log(`Darth Vader's weapon is ` + darthVader.weapon);
console.log(`Darth Vader is sith? ` + darthVader.sith);
console.log(`Darth Vader's jedi? ` + !darthVader.sith);
//3.
let myArray = [`hello`, `everyone`];
console.log(`The length of the array is: ` + myArray.length);
myArray.push(1, `chicken`,`nugget`);
console.log(`The length of the array is now: ` + myArray.length)
myArray.shift();
for (let i = 0; i<myArray.length; i++) {
    console.log(myArray[i]);
}
