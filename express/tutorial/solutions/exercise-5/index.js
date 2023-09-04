// Import the express library
const express = require('express');


// Create an instance of the express application
const app = express();

// set EJS as the view engine for Express
app.set('view engine', 'ejs');

// tell Express to use the public directory to serve static files
app.use(express.static('public'));


// let's define a JavaScript object that represents user data
let userData = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "hiking", "gaming"]
};



// Define a root route, pass the Data to the EJS Template:
app.get('/', (req, res) => {
    res.render('layout', { user: userData });
});





// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
