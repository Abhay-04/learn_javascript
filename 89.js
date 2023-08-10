// same method in subclass

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
    constructor(name ,age ,speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }

    isEat(){
        return `Modified Eat : ${this.name} is eating `
    }
   
}

const tommy = new Dog("tommy" , 2 , 45);

console.log(tommy.isEat());