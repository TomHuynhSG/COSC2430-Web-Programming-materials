const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb'); // Inserts at index 1
console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); // Replaces 1 element at index 4
console.log(months); // ['Jan', 'Feb', 'March', 'April', 'May']


months.splice(1, 3, 'ABC', 'DEF','GHK'); // Replaces 3 element at index 1
console.log(months); // ['Jan', 'ABC', 'DEF', 'GHK', 'May']


