// object inside array

const users = [
    {userid: "1", firstName: "Abhay", gender: "Male"},
    {userid: "2", firstName: "Rohan", gender: "Male"},
    {userid: "3", firstName: "Krishna", gender: "Male"}
]

console.log(users);

for(let user of users){
    console.log(user.firstName);
}