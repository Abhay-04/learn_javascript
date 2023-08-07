// class keyword
// class are fake

class CreateUser{
    constructor(firstName ,lastName , email , age , address){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;

    }

    about(){return `${this.firstName} is ${this.age} years old`}

    is18(){ return this.age>= 18;}

    sing(){return "la la lala la";}
}

const user1 = new CreateUser("Abhay" , "Sharma" , "abhysharma5113@gmail.com" , 23, "New Delhi" );
const user2 = new CreateUser("Rohan" , "Sharma" , "rohansharma5113@gmail.com" , 25, "New Delhi" );
const user3 = new CreateUser("Krishna" , "Sharma" , "krishnasharma@gmail.com" , 21, "New Delhi" );

console.log(user1.about());
console.log(user2.sing());
console.log(user1.is18());

console.log(Object.getPrototypeOf(user1));