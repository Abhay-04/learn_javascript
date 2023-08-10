// map method

// const numbers = [2,8,7,4,6];

// const square = function(number){
//     return number * number;
// }

// const squareNumber = numbers.map(square);

// console.log(squareNumber);

const users = [
    {firstName: "Abhay" , age: "23"},
    {firstName: "Rohan" , age: "25"},
    {firstName: "Krishna" , age: "21"},
]

const userName = users.map(function(name){
    return name.firstName;
})

console.log(userName);