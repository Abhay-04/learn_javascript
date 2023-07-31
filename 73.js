// call apply bind

function about( hobby , favMusician ){
    console.log(this.firstName , this.age , hobby , favMusician);
}

const user1 = {
    firstName: "Abhay",
    age: 23,
   
}

const user2 = {
    firstName: "Rohan",
    age: 25
}

//call
// about.call(user2,"timepass", "Patanhi");

// apply
// about.apply(user2 , ["timepass" , "Travis scott"]);

// bind

const func = about.bind(user2 , "timepass" , "DJ Bablu");

func();
