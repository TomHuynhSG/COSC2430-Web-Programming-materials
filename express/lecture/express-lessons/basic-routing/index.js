const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

// Route for the cat page
app.get('/cat', function(req, res) {
  res.send('This is a cat page! Meow!');
});

// Route for the dog page
app.get('/dog', function(req, res) {
  res.send('This is a dog page! Woof!');
});

// Route for any other path
app.get('*', function(req, res) {
  res.send('This page does not exist! 404 Page!');
});

// Start the server
app.listen(port, function() {
  console.log(`Server started on port ${port}.`);
});
