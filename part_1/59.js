// reduce method

// const numbers = [1,2,3,4,5,45];

// const sum = numbers.reduce ((accumulator , currentValue) => {
//     return accumulator + currentValue;
// } , 100);

// console.log(sum);

const userCart = [
    {productId: 1 , productName: "Mobile" , price: 12000},
    {productId: 2 , productName: "AC" , price: 35000},
    {productId: 3 , productName: "TV" , price: 20000},
]

const totalAmount = userCart.reduce((totalPrice , currentPrice) => {
    return totalPrice + currentPrice.price
} , 0);

console.log(totalAmount);
