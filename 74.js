const user = {
    firstName: "Abhay",
    age: 23,
    about: function(){
        // console.log(this);
        console.log(this.firstName , this.age);
    }
}

// dont do this mistake

// const func = user.about;

// func();

// solution 

const func = user.about.bind(user);
func();
