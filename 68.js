// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol

// const person = {
//     firstName: "Abhay",
//     age: 23,
//     1: "one"
// }

// console.log(person);
// console.log(person["firstName"]);

// for(let keys in person){
//     console.log( typeof keys);
// }

//map 

const person = new Map();

person.set('firstName' , 'Abhay');
person.set('age' , 23);
person.set(1 , 'one');
// person.set([1,2,3] , 'oneTwothree');
// person.set({1:'one'});

// console.log(person);

// console.log(person.get(1));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key , typeof key);
// }

// for of loop on map

// for (let [key , value] of person){
//     // console.log(Array.isArray(key)) 
//     console.log(key , value);

// }

// const user = new Map([['firstName' , 'Abhay'] , ['age','23']]) ;

// console.log(user);

const user1 = {
    id: 1,
    firstName: "Abhay"
 
}
const user2 = {
    id: 2,
    firstName: "Rohan"
 
}

const extraInfo = new Map();

extraInfo.set(user1 , {age: 23 , gender: "male"});
extraInfo.set(user2 , {age: 25 , gender: "male"});

// console.log(extraInfo);

console.log(user1.id);
console.log(extraInfo.get(user1).age);
console.log(extraInfo.get(user2).gender);