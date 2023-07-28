// filter method

const numbers = [1,4,2,8,7];

// const isEven = function(number){
//     return number%2 === 0;
// }

const evenNumbers  = numbers.filter(function(number){
    return number % 2 === 0;
});

console.log(evenNumbers);
