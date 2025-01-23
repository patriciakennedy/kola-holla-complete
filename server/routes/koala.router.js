//The koala.router.js file handles all koala-related API requests, allowing the server to fetch, add, update, and delete koala data from the PostgreSQL database. 

const express = require('express');
const koalaRouter = express.Router();
// Import database connection
const pool = require('../modules/pool'); 
// Test route to check if the router is working
koalaRouter.get('/test', (req, res) => {
  res.send('Koala router is working!');
});

// GET route to fetch all koalas from the database
koalaRouter.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "koalas" ORDER BY "name";'; // SQL query

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows); // Send retrieved koalas as response
    })
    .catch((error) => {
      console.error('Error getting koalas in router.get:', error);
      res.sendStatus(500); // Send a 500 Internal Server Error status
    });
});

// Export the router to be used in server.js
module.exports = koalaRouter;
