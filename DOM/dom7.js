// loop (HTMLCollection)

let navItems = document.getElementsByTagName("a");

console.log(navItems);

// we can't use forEach method to itreate in HTMLCollection

// simple for loop
// for of loop
// forEach loop

// for(let i=0; i < navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "blue";
// }

// for (let navItem of navItems){
    
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "blue";

// }

// we cant use foreach top iterate HTML collection

// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "blue";
    
// });

// change HTMLCollection to array

navItems = Array.from(navItems);

console.log(Array.isArray(navItems));

// after converting HTMLcollection to Array wer can use forEach method and use any property of Array

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "green";
    navItem.style.color = "blue";
    
});