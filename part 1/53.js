// parameter destructuring

// let person = {
//     firstName: "Abhay",
//     gender: "Male",
// }

// function getDetails(obj){
//     console.log(person.firstName);
//     console.log(person.gender);

// }

// getDetails(person);

let person = {
    firstName: "Abhay",
    gender: "Male",
    age: 13,
}

function getDetails({firstName , gender ,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);

}

getDetails(person);