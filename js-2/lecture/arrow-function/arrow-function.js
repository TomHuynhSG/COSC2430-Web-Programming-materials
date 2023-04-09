// Example 1
// Without arrow function
function square (x){
    return x * x;
}

// With arrow function
let square = (x) => {
    return x * x;
}

// Example 2
// Without arrow function
function sum (x, y){
    return x + y;
}

// With arrow function
let sum = (x, y) => {
    return x + y;
}

// Example 3
// Round brackets are optional if there is only one parameter:
let square = x => {
    return x * x;
}

// Use empty round brackets for functions with no parameters:
let sayHello = () => {
    return "Hi there!";
}

// Example 4
// Regular function expression
let isEvenVersion1 = function (number) {
    return number % 2 === 0;
}

// Arrow function with round brackets around parameters
let isEvenVersion2 = (number) => {
    return number % 2 === 0;
}

// No round brackets around parameters
let isEvenVersion3 = number => {
    return number % 2 === 0;
}

// Implicit return
let isEvenVersion4 = number => {
    number % 2 === 0;
}

// One-liner implicit return
let isEvenVersion5 = number => number % 2 === 0;




