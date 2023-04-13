const fs = require('fs');

const sourceFile = 'example_file.txt';
const destinationFile = 'example_file_copy.txt';

// Copy a file
fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`File "${sourceFile}" has been copied to "${destinationFile}" successfully!`);
    }
});


