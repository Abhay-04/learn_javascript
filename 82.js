// use prototype to make object with proto 

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age>= 18;
//     },

//     sing: function(){
//         return "la la lala la";
//     },

//     hello: function(){
//         return "hello world";
//     }
// }

const createUser = function(firstName ,lastName , email , age , address){

    const user = Object.create(createUser.prototype);  
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    return user;

}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}

createUser.prototype.is18 = function(){
             return this.age>= 18;
      }

createUser.prototype.sing = function(){
             return "la la lala la";
         }

createUser.prototype.hello = function(){
         return "hello world";
         }

const user1 = createUser("Abhay" , "Sharma" , "abhysharma5113@gmail.com" , 23, "New Delhi" );
const user2 = createUser("Rohan" , "Sharma" , "rohansharma5113@gmail.com" , 25, "New Delhi" );
const user3 = createUser("Krishna" , "Sharma" , "krishnasharma@gmail.com" , 21, "New Delhi" );

console.log(user1);

console.log(user1.about());
console.log(user2.sing());
console.log(user2.hello());