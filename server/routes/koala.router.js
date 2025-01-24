//The koala.router.js file handles all koala-related API requests, allowing the server to fetch, add, update, and delete koala data from the PostgreSQL database. 

const express = require('express');
const koalaRouter = express.Router();
// Import database connection
const pool = require('../modules/pool'); 
// Test route to check if the router is working
koalaRouter.get('/test', (req, res) => {
  res.send('Koala router is working!');
});

// GET route to fetch all koalas from the database/////////////////////////////
koalaRouter.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "koalas";'; // SQL query
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

// POST////////////////////////////////////////////////////////////////////////
// Route to add a new koala to the database
koalaRouter.post('/', (req, res) => {
  console.log('Incoming data:', req.body); // Debugging request body

  const queryText = `
    INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") 
    VALUES ($1, $2, $3, $4, $5); 
  `;

  // Execute the database query with dynamic values
  pool.query(queryText, [
    req.body.name,
    req.body.gender,
    req.body.age,
    req.body.ready_to_transfer, // Ensure consistency with the database column
    req.body.notes,
  ])
    .then(() => res.sendStatus(201)) // 201 = Created
    .catch((err) => {
      console.error('Error adding koala:', err);
      res.sendStatus(500); //500 = Server Error
    });
});



// Export the router to be used in server.js //////////////////////////////////////////
module.exports = koalaRouter;
