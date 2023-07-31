// short syntax for map

// const user = {
//     firstName: "Abhay",
//     age: 23,
//     about: function(){
        
//         console.log(this.firstName , this.age);
//     }
// }

const user = {
    firstName: "Abhay",
    age: 23,
    about(){
        
        console.log(this.firstName , this.age);
    }
}

user.about();