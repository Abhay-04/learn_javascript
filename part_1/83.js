// new keyword  example

// function createUser(firstName , age){
//     this.firstName = firstName;
//     this.age = age; 

// }

// createUser.prototype.about = function(){
//     console.log(this.firstName , this.age);
    
// }

// const user1 = new createUser("Abhay" , 23);

// // new keyword 
// // 1) create empty this {}
// // return this
// // make relation between objects

// // console.log(user1);

// user1.about();

//  new keyword with existing example

//1) this = {}
// 2) return this
// 3) const user = Object.create(createUser.prototype);  

// constructor function (function name staret with capital letter )
const CreateUser = function(firstName ,lastName , email , age , address){

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}

CreateUser.prototype.is18 = function(){
             return this.age>= 18;
      }

CreateUser.prototype.sing = function(){
             return "la la lala la";
         }

CreateUser.prototype.hello = function(){
         return "hello world";
         }

const user1 = new CreateUser("Abhay" , "Sharma" , "abhysharma5113@gmail.com" , 23, "New Delhi" );
const user2 = new CreateUser("Rohan" , "Sharma" , "rohansharma5113@gmail.com" , 25, "New Delhi" );
const user3 = new CreateUser("Krishna" , "Sharma" , "krishnasharma@gmail.com" , 21, "New Delhi" );

// console.log(user1);

console.log(user1.about());
console.log(user2.sing());
console.log(user2.hello());
