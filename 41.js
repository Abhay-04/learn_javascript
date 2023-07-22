// object destructuring

const band = {
    bandName: "kashmir",
    famousSong: "Bombay dreams",
    year: 2016,
    anotherFamoussong: "Dead Mans hand"
}

let {bandName:value1 , famousSong , ...restProp}  = band;
console.log(value1);
console.log(famousSong);

console.log(restProp);