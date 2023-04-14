const fs = require('fs');

// Create a folder
fs.mkdirSync('my_folder');

// Create a file
fs.writeFileSync('my_folder/my_file.txt', 'This is an example file content.');

// Copy a file
fs.copyFileSync('my_folder/my_file.txt', 'my_folder/my_new_file.txt');





