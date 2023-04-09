let movieLine = ['tom', 'nancy'];

movieLine.push('james'); // ['tom', 'nancy', 'james']
movieLine.push('charles'); // ['tom', 'nancy', 'james', 'charles']
movieLine.pop(); // returns 'charles' and remove him from moveLine
console.log(movieLine); // ['tom', 'nancy', 'james']

movieLine.unshift('john') // ['john, 'tom', 'nancy', 'james']
movieLine.unshift('adam') // ['adam', 'john, 'tom', 'nancy', 'james']
movieLine.shift(); // returns 'adam' and remove him from moveLine
console.log(movieLine); // ['john, 'tom', 'nancy', 'james']


