// loop (NodeList)

let navItems = document.querySelectorAll("a");

console.log(navItems);

// simple for loop

// for(let i=0; i < navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "blue";
// }

// For of loop

// for (let navItem of navItems){
    
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "blue";

// }

// forEach Method

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "green";
    navItem.style.color = "blue";
    
});