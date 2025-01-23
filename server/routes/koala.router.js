const express = require('express');
const router = express.Router();

// Example route (to test if it's working)
router.get('/', (req, res) => {
  res.send('Koala router is working!');
});

// Route to Koalas

module.exports = router; 
