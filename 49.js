// lexical scope
const myVar = "valueOne";

function app(){

   function myfunc(){
    // const myVar = "valueMyfunc";

    const myFuncinside = function(){
        console.log(myVar);
    }
    myFuncinside();
   }

   const myfunc2 = function(){}
   const myfunc3 = () => {}

   console.log(myVar);
   myfunc();

}

app();