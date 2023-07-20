// while loop for array

const fruits = ["apple", "banana" , "grapes"];

let i=0;

const fruits2 = [];
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}

console.log(fruits2)