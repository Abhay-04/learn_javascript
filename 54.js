// callback function

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`Your name is ${name}`);

}

function myFunc(callback){
    console.log("Helllo world");
    callback("Abhay");
    
}

myFunc(myFunc2);
