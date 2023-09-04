// Import the express library
const express = require('express');


// Create an instance of the express application
const app = express();


// Define a root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
