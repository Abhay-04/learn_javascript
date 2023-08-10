// function inside function

function app(){

    const myfunc = () => {
        console.log("inside myfunc");
    }

    const addTwo = (numOne , numTwo) => {
        return numOne + numTwo;
    }

    const mul = (numOne , numTwo) => numOne * numTwo;

    console.log("inside app");
    myfunc();

    console.log(addTwo(3,5));
    console.log(mul(3,5));
}

app();
