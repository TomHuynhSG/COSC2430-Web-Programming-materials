const fs = require('fs');

const folderName = 'example_folder';

// Create a folder
fs.mkdir(folderName, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Folder "${folderName}" has been created successfully!`);
    }
});


