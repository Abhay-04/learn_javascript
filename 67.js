//  sets (it is iterable)
// store data
// sets also have its own method
//No index based access
//order is not guaranteed
//unique items only(duplicate not allowed)
// const items = ['item1','item2']
// const numbers = new Set();

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);
// numbers.add(8);
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present");
// } else {
//     console.log("1 is not present")
// }

// for (let number of numbers){
//     console.log(number);
// }

// console.log(numbers);

const numbers = [1,2,3,3,4,5,5,6];

const uniqueNumber = new Set(numbers);

console.log(uniqueNumber);

let l = 0 ;

for (let number of uniqueNumber){
    length++
}

console.log(length);
