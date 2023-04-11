// Part 1
var fruit = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove "Banana" from the array
fruit.splice(0, 1);

// Sort the array in order
fruit.sort();

// Put "Kiwi" at the end of the array
fruit.push("Kiwi");

// Remove "Apples" from the array
var index = fruit.indexOf("Apples");
if (index !== -1) {
    fruit.splice(index, 1);
}

// Sort the array in reverse order
fruit.reverse();

console.log(fruit); // ['Kiwi', 'Oranges', 'Blueberries']


// Part 2
var fruit2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access "Oranges" item
var oranges = fruit2[1][1][0];

console.log(oranges); // Output: "Oranges"