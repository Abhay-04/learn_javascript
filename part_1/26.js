// intro to array 

// reference type

// ordered collections of items

let fruits = ["apple", "grapes" , "mango"];

console.log(fruits);

let numbers = [1,2,3,4];

console.log(numbers);

let mixed = ["apple" , 1 , 1.25 , null , undefined , 0];

console.log(mixed);

fruits[2] = "banana";

console.log(fruits);

console.log(typeof fruits);

console.log(Array.isArray(fruits));

let obj = {};

console.log(Array.isArray(obj));