// methods

// function inside object

function userInfo(){
    console.log(`user name is ${this.firstName} and age is ${this.age}`)
}

const user1= {
 
    firstName: "Abhay",
    age: 23,
    about: userInfo,
}
const user2= {
 
    firstName: "Rohan",
    age: 25,
    about: userInfo,
}
const user3= {
 
    firstName: "Krishna",
    age: 21,
    about: userInfo,
}

user1.about();
user3.about();
user2.about();