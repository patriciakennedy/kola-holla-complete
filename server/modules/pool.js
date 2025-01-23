// The pool.js file is responsible for establishing and managing the connection between our Express server and the PostgreSQL database using a connection pool.

// DB connection
// Import pool from pg
const { Pool } = require('pg');

// pg configuration
const pool = new Pool({
  user: 'postgres', 
  password: 'test722', 
  database: 'koala_holla',
  host: 'localhost',
  port: 5432,
});

// Event listeners for debugging connection status
pool.on('connect', () => console.log('Connected to PostgreSQL'));
pool.on('error', (err) => console.error('PostgreSQL Error:', err));

module.exports = pool; // Export the pool for use in other files
