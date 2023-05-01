// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Handle GET requests to the '/process-form' route
app.get('/process-form', (req, res) => {
    // Log the form data received from the client
    console.log("Data received from the frontend for GET form:");
    console.log(`Name: ${req.query.name}`);
    console.log(`Email: ${req.query.email}`);
    
    // Send a response back to the client
    res.send('Get Form submitted!');
});

// Handle POST requests to the '/process-form' route
app.post('/process-form', (req, res) => {
    // Log the form data received from the client
    console.log("Data received from the frontend for POST form:");
    console.log(`Username: ${req.body.username}`);
    console.log(`Password: ${req.body.password}`);
    
    // Send a response back to the client
    res.send('Post Form submitted!');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});