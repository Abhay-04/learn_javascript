// Every Method

// const numbers = [2,4,6,8,10];

// const isEven = numbers.every((number) => number % 2 === 0);

// console.log(isEven);

const userCart = [
    {productId: 1 , productName: "Mobile" , price: 12000},
    {productId: 2 , productName: "AC" , price: 20000},
    {productId: 3 , productName: "TV" , price: 20000},
]

const ans = userCart.every((cardItem) => cardItem.price < 30000);

console.log(ans);