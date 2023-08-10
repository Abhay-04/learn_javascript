// nested if else

let winningNumber = 18;
let userGuess = +prompt();

if (userGuess === winningNumber){
    console.log("Your Guess is right!!");
} else {
    if(userGuess < winningNumber){
        console.log("too low !!");
    }else{
        console.log("too high !!")
    }
}