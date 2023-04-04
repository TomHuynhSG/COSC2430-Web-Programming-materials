
// Solution 1: Using for loop!
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    let fib = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib[n];
  }
  
  console.log(fibonacci(5)); // Output: 3

// Solution 2: Using recursive function!
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  console.log(fibonacci(5)); // Output: 3