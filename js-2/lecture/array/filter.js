let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let odds = nums.filter( n => n % 2 === 1);
console.log(odds); // returns [9, 7, 5, 3, 1]

let smallNums = nums.filter(n => n < 5);
console.log(smallNums); // returns [4, 3, 2, 1]


