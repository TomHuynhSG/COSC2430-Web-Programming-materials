let sum1to99 = 0;
let count = 1;      
let stopCount = 100;      

do {
  sum1to99 += count;
  count++;
} while ( count < stopCount )

console.log(sum1to99);
console.log(count);