const figlet = require('figlet');
const chalk = require('chalk');
let cats = require('cat-ascii-faces');

// Check if the text and color arguments are provided
if (process.argv.length < 3) {
    console.error('Please provide a text argument.');
    process.exit(1);
}

const text = process.argv[2];
const color = process.argv[3] || 'yellow'; // Default color is white

// Generate ASCII art from the text
figlet(text, function (err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // Without chalk, we can simply return:
    // console.log(data);

    // Apply color to the ASCII art output
    const coloredOutput = chalk[color](data);

    // Print a random cat text emojis
    console.log(cats());

    console.log(coloredOutput);

    // Print a random cat text emojis
    console.log(cats());
});