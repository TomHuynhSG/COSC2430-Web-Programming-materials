// Import the express library
const express = require('express');


// Create an instance of the express application
const app = express();

// set EJS as the view engine for Express
app.set('view engine', 'ejs');

// tell Express to use the public directory to serve static files
app.use(express.static('public'));


// Define a root route
app.get('/', (req, res) => {
    res.render('index');
});



// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
