// static methods and properties

class Person {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static classInfo(){
        return `this is person class`;
    }

    static desc = "static property";

    isEat(){
        return `${this.firstName} is eating`
    }

    isSuperCute(){
      return this.age <= 1;
    }

    isCute(){
        return true;
    }

}

const person1 = new Person("Abhay" , "Sharma");

console.log(person1.isEat());
console.log(Person.classInfo());
console.log(Person.desc);
