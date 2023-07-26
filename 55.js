// function returning function

function hello(){
    function hello(){
        return "hello world";
    }
    return hello;
}

const ans = hello();

console.log(ans());