const fs = require('fs');

const fileName = 'example_file.txt';
const fileContent = 'This is an example file created using fs module in Node.js.';

// Create a file
fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`File "${fileName}" has been created successfully!`);
    }
});

