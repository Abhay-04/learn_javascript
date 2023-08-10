// const user = {
//     firstName: "Abhay",
//     lastName: "Sharma",
//     email: "abhysharma5113@gmail.com",
//     age: 23,
//     address: "House number , colony , pincode , state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age>=18;
//     }

// }

// console.log(user.about());
// console.log(user.is18());

// 1) function (that create user)
// 2) add key value pair
// 3) return object

const createUser = function(firstName ,lastName , email , age , address){

    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    }
    user.is18 = function(){
        return this.age>= 18;
    };
    return user;

}

const user1 = createUser("Abhay" , "Sharma" , "abhysharma5113@gmail.com" , 23, "New Delhi" );

console.log(user1);
console.log(user1.about());
console.log(user1.is18());