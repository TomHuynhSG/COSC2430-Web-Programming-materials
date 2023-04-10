let words = ['dog', 'dig', 'log', 'bag', 'wag'];

words.every(word => word.length === 3);  // true

words.every(word => word[0] === 'd');  // false

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g';
}) // true 




