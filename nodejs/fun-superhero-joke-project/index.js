const joke = require('give-me-a-joke');
const superheroes = require('superheroes');
const chalk = require('chalk');

// Adding color to terminal string output using chalk package
const coloredText = chalk.red('This is red text using chalk package');
console.log(coloredText);

// Generating a superhero name using superheroes package
const superheroName = superheroes.random();
console.log(chalk.green('Superhero name of the day:'));
console.log(chalk.cyan(superheroName));

// Generating a joke using give-me-a-joke package
joke.getRandomDadJoke(function (joke) {
  console.log(chalk.green('Joke of the day:'));
  console.log(chalk.bold.red(joke));
});


