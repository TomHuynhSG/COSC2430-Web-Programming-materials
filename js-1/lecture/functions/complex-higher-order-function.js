// define two functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// define a higher-order function that takes in a function as an argument
function performOperation(operation, a, b) {
    return operation(a, b);
}

// use the higher-order function to perform different operations
const result1 = performOperation(add, 5, 3); // returns 8
const result2 = performOperation(subtract, 5, 3); // returns 2

console.log(result1); // 8
console.log(result2); // 2