// Import the express library
const express = require('express');


// Create an instance of the express application
const app = express();

// tell Express to use the public directory to serve static files
app.use(express.static('public'));


// Define a root route
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="/css/styles.css">
        </head>
        <body>
        <h1>Hello, World!</h1>
        <img src="/images/sample.jpg" alt="Sample Image">
        <script src="/js/script.js"></script>
        </body>
        </html>
    `);
});


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
