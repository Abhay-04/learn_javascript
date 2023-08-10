// default parameter

// function addTwo(a,b){
//     if (b === undefined){
//         b = 0;
//     }
//     return a + b;

// }

// const ans = addTwo(5);

// console.log(ans);

function addTwo(a,b=0){
    return a + b;
}

const ans = addTwo(5)
console.log(ans);