// inner HTML

const heading = document.querySelector(".header");

// console.log(heading.innerHTML);

heading.innerHTML = "<h1>Heading changed </h1>";
heading.innerHTML += "<button class= \"btn\"> learn More </button>";

console.log(heading.innerHTML);