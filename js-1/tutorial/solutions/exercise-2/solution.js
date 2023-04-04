let myName = "Jerry";
let myAnimals = "Koala 🐨, Snail 🐌, Penguin 🐧";
let animalCount = 3;

// Solution 1: Using + for string concatenation 
let message = myName + " loves these " + animalCount + " animals: " + myAnimals;
console.log(message);

// Solution 2: Using template literals (template strings).
message = `${myName} loves these ${animalCount} animals: ${myAnimals}`;
console.log(message);