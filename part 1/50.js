// function scope and block scope

// let  and const  are block scope

// var are function scope 

// if(true){
//     var firstName = "Abhay";

//     console.log(firstName);
// }

// console.log(firstName);

let firstName = "Rohan";

function myApp(){
    if(true){
        let firstName = "Abhay";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();
