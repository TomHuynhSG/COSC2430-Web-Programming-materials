let words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
words.some(word => word.length > 4);  // true

// Does any word start with 'Z'?
words.some(word => word[0] === 'Z');  // false
    
// Does any word contain 'cake'?
words.some(w => w.includes('cake')); // true




