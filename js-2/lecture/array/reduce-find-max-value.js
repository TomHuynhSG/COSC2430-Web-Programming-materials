let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

let topScore = grades.reduce((max, currVal) => {
    if (currVal > max) return currVal;
    return max;
});
console.log(topScore); // returns 99

// A shorter version with Max.max & implicit return 
let topScoreVer2 = grades.reduce((max, currVal) => (Math.max(max, currVal)));
console.log(topScoreVer2); // returns 99

