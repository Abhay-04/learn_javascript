// arrow function ka this

// arrow function ka khud ka this nhi hota
// arrow function this apne surrounding se leta hai
// surrounding matlab 1 level up se leta hai (window hoga)
// arrow ke this ko change nhi kar sakte

const user = {
    firstName: "Abhay",
    age: 23,
    about: () => {
        // console.log(this);
        console.log(this.firstName , this.age);
    }
}

user.about.call();

user.about.call(user); // change karne par bhi same result 