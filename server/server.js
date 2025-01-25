// Import Express (framework for building the server)
const express = require('express');
const app = express(); // Create an instance of Express


// Import Body-Parser (middleware for handling JSON request bodies)
const bodyParser = require('body-parser');

// Define the port number (Uses environment variable or defaults to 5000)
const PORT = process.env.PORT || 5000;

// Import koala router (Handles routes for koalas)
const koalaRouter = require('./routes/koala.router');

// Serve static files from the "public" directory (if any)
app.use(express.static('server/public'));

// Allows Express to parse JSON request bodies
app.use(express.json());

////////////////////////////////////////////////////////

// ROUTES
// Any request to "/koalas" will be handled by koalaRouter
app.use('/koalas', koalaRouter);

// Start the Express server and listen on the defined PORT
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
