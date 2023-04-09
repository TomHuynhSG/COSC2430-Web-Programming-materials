let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
]

let movie = movies.find( movie => movie.includes('Mrs.'));
console.log(movie); // returns 'Mr. and Mrs. Smith'

let movie2 = movies.find( movie => movie.indexOf('Mrs.')===0);
console.log(movie2); // returns 'Mrs. Doubtfire'



