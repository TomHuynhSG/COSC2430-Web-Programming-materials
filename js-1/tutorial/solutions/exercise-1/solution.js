let x = 10;
let y = 20;

// Solution 1 using Hint 1: Using another variable.
let temp = x; // Store the value of x in a temporary variable.
x = y; // Assign the value of y to x.
y = temp; // Assign the original value of x (stored in temp) to y.

console.log(x); // Output: 20
console.log(y); // Output: 10

// Solution 2 using Hint 2: Another way is not using another variable, but only using two existing variables with some simple maths.
x = x + y; // Add x and y, and assign the result to x.
y = x - y; // Subtract the original value of y from the new value of x, and assign the result to y.
x = x - y; // Subtract the original value of x from the new value of y, and assign the result to x.

console.log(x); // Output: 20
console.log(y); // Output: 10