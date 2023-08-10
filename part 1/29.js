// how to clone a array

// slice method

// let array1 = ["item1", "item2"];

// let array2 = array1.slice(0) .concat(["item3" ,"item4"]);

// console.log(array2);

// concat method

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1 , ["item3","item4"]) ;

// console.log(array2);

// spread operator

let array1 = ["item1", "item2"];

let array3 = ["item5" , "item6"];
let array2 = [...array1 , "item3" , "item4" , ...array3];

console.log(array2);
