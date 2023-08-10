// rest parameter

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        
        total = total + number;
    }

    return total;

}

const ans = addAll(1,2,35,47,78,8455,48,8787);

console.log(ans);