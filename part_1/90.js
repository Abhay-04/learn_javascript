// getters and setters

class Person {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName , lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
        
    }

}

// getter

const person1 = new Person("Abhay" , "Sharma");

console.log(person1.fullName);

// setter

person1.fullName = "Krishna Sharma";
console.log(person1.fullName);
