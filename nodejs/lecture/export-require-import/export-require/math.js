// Define and export a function to add two numbers
function add(a, b) {
    return a + b;
}

// Define a function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Export the functions using the 
// `module.exports` or `exports` objects
module.exports = {
    add,
    subtract
};



// Or you can do this short-hand export expression:
// exports.add = function (a, b) {
//     return a + b;
// };

// // Define and export a function to subtract two numbers
// exports.subtract = function (a, b) {
//     return a - b;
// };


