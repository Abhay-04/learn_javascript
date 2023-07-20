// array destructuring

const myarray = ["value1", "value2" , "value3" , "value4"];

let [myvar1 ,myvar2, ...myNewarray ] = myarray;

console.log("value of var1 is",myvar1);
console.log("value of var2 is", myvar2);

console.log(myNewarray);