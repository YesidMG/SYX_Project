const express = require('express');
const router = express.Router();
const pool = require('../config/config');

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM entities');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.json(result.rows);
});

module.exports = router;