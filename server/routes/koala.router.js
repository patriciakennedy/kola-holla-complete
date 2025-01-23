const express = require('express');
const router = express.Router();

// Example route (to test if it's working)
router.get('/', (req, res) => {
  res.send('Koala router is working!');
});

module.exports = router; 
