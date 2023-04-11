let myTeam = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that has all the usernames with a "!" added to each username
let usernamesWithExclamation = [];
myTeam.forEach(function (player) {
    usernamesWithExclamation.push(player.username + "!");
});
console.log(usernamesWithExclamation);
// Output: [ 'john!', 'becky!', 'susy!', 'tyson!' ]

// Create an array using map that has all the usernames with a "?" added to each username
let usernamesWithQuestion = myTeam.map(function (player) {
    return player.username + "?";
});
console.log(usernamesWithQuestion);
// Output: [ 'john?', 'becky?', 'susy?', 'tyson?' ]

// Filter the array to only include users who are on team: red
let redTeamPlayers = myTeam.filter(function (player) {
    return player.team === "red";
});
console.log(redTeamPlayers);
/* Output: 
[
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: [ 'ball', 'book', 'pen' ]
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: [ 'ball', 'eraser', 'pen' ]
  }
] */

// Find out the total score of all users using reduce
let totalScore = myTeam.reduce(function (acc, player) {
    return acc + player.score;
}, 0);
console.log(totalScore); // Output: 71