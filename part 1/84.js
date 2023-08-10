// has own property

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

//  print all keys own + prototype keys 
// for(let key in user1){
//     console.log(key);
// }

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
