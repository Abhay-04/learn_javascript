// find method

// const animal = ["Monkey" , "cat" , "dog" , "lion"];

// const isLength3 = animal.find((string) => string.length===3);

// console.log(isLength3);

const users = [
    {userId:1 , userName: "Abhay"},
    {userId:2 , userName: "Rohan"},
    {userId:3 , userName: "Krishna"},
    {userId:4 , userName: "Kunal"},
]

const myUser = users.find((user)=>user.userId === 1);

console.log(myUser);