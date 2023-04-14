// // Import chalk library
// const chalk = require('chalk');

// // Get user name and age from command line arguments
// const [name, age] = process.argv.slice(2);

// // Highlight name in red and age in green using chalk
// const highlightedName = chalk.red(name);
// const highlightedAge = chalk.green(age);

// // Print out the user name and age with highlighting
// console.log(`Name: ${highlightedName}`);
// console.log(`Age: ${highlightedAge}`);


// Extra challenge Solution
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for name
rl.question('What is your name? ', (name) => {
    // Prompt for age
    rl.question('What is your age? ', (age) => {
        // Print out name and age
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);

        // Close the readline interface
        rl.close();
    });
});