// function expression

// const happyBirthdaysong = function() {
//     console.log("happy bithday to you.......");
// }

// happyBirthdaysong();

// const sumTwonumber = function(number1 , number2 , number3){
//     return number1 + number2 + number3;
// }

// const ans = sumTwonumber(4 ,88 , 45);

// console.log(ans);

// const isEven = function(number){
//    return number % 2 === 0;
// }

// const ans = isEven(55);

// console.log(ans);

// const  firstChar = function(anyString){
//     return anyString[0];
// }

// console.log(firstChar("abhay"));

const findTarget = function(array , target){
    for (let i=0; i<array.length;i++){
       if(array[i]=== target){
           return i;
       }
       
  }
  return -1;
}

const myArray = [0,4,8,12];
const ans = findTarget(myArray , 8);
console.log(ans);