// nested destructuring

const users = [
    {userid: "1", firstName: "Abhay", gender: "Male"},
    {userid: "2", firstName: "Rohan", gender: "Male"},
    {userid: "3", firstName: "Krishna", gender: "Male"}
]

const [user1 , user2 , user3] = users

console.log(user1);
console.log(user2);

const [{firstName: user1name} , , {firstName}] = users

console.log(firstName);
console.log(user1name);
