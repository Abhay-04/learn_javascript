class Animal {
    constructor(name , age){
        this.name = name,
        this.age = age
    }

    isEat(){
        return `${this.name} is eating`
    }

    isSuperCute(){
      return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal {
    
}

const tommy = new Dog("tommy" , 2);

console.log(tommy);

console.log(tommy.isCute());