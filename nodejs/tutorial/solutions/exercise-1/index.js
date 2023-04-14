const fs = require('fs');

// Create the src folder
fs.mkdirSync('src');

// Create the myapp folder inside src
fs.mkdirSync('src/myapp');

// Create the _init_.py file inside myapp
fs.writeFileSync('src/myapp/_init_.py', '');

// Create the utils.py file inside myapp
fs.writeFileSync('src/myapp/utils.py', '');

// Create the test folder inside src
fs.mkdirSync('src/test');

// Create the _init_.py file inside test
fs.writeFileSync('src/test/_init_.py', '');

// Create the test_devision.py file inside test
fs.writeFileSync('src/test/test_devision.py', '');

console.log('Folder structure created successfully!');