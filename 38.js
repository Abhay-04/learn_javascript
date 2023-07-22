// how to iterate object

// for in loop

const person = {
    name: "Abhay",
    age: 23,
    hobbies: ["music", "travelling"]
}

for (let key in person){
    console.log(key , person[key]);
}

// object keys method

console.log(Object.keys(person));

for (let key of Object.keys(person)){
    console.log(person[key]);
}