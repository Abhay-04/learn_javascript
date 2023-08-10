// Prototype in Javascript

function hello(){
    console.log("hello World");
}
// Javascript function ===> function + object {}

// name property ---> tells function name
console.log(hello.name);

// you can add your Own property

hello.myOwnproperty = "any property";

console.log(hello.myOwnproperty);

// function provide more useful properties

// function hame dete hai free space ---> object {}

// use object ko bolte hai prototype

// console.log(hello.prototype);

// only function provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalalal"
};

console.log(hello.prototype);
console.log(hello.prototype.sing());