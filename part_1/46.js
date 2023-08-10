// arrow function

// const happyBirthdaysong = () => {
//     console.log("happy bithday to you.......");
// }

// happyBirthdaysong();

// const sumTwonumber = (number1 , number2 , number3) =>{
//     return number1 + number2 + number3;
// }

// const ans = sumTwonumber(4 ,88 , 45);

// console.log(ans);

// const isEven = number => number % 2 === 0;

// const ans = isEven(55);

// console.log(ans);

// const  firstChar = anyString => anyString[0];

// console.log(firstChar("abhay"));

const findTarget = (array , target) => {
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