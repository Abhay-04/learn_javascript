// some method

// kya ek bhi number even hai

// const numbers = [1,3,5,8,11];
 
// const ans = numbers.some((number)=> number % 2 === 0 );

// console.log(ans);

const userCart = [
    {productId: 1 , productName: "Mobile" , price: 12000},
    {productId: 2 , productName: "AC" , price: 20000},
    {productId: 3 , productName: "TV" , price: 20000},
    {productId: 4 , productName: "Macbook" , price: 120000},
]

const ans = userCart.some((cardItem) => cardItem.price > 100000);

console.log(ans);