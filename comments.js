// Create web server application
// Run with: node comments.js
// Note: You need to install the express module with npm install express

// Load the express module
var express = require('express');

// Create a new application with express
var app = express();

// Create a new route that will respond to GET requests for /comments
app.get('/comments', function (req, res) {
  // Set the status code to 200 (OK)
  res.status(200);
  // Set the content type to text/plain
  res.set('Content-Type', 'text/plain');
  // Send the response body as "Hello, world!"
  res.send('Hello, world!\n');
});

// Start the web server on port 8080
app.listen(8080, function () {
  console.log('Web server listening on port 8080!');
});