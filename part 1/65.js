// splice method

// start delete insert

const myArray = ["itemOne" , "itemTwo" , "itemThree"];

// delete

// const deletedItem = myArray.splice(1 , 1 );

// console.log("deleted item is " ,deletedItem);

// insert

// const insertedItem = myArray.splice(1 , 0 , "inserted item");

// delete and insert simultaneously

const deletedItem = myArray.splice(1 , 2 , "inserted itemOne" , "inserted itemtwo");

console.log("Deleted items is",deletedItem);
console.log(myArray);