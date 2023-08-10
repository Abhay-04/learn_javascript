// difference between dot and bracket notation
const key = "emails"
const person = {
    name: "Abhay",
    age: 23,
    "person hobbies": ["music", "travelling"]
}

console.log(person["person hobbies"]);

person[key] = "abhay@gmail.com";

console.log(person);
