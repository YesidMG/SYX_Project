const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM entidades');
  res.json(result.rows);
});

module.exports = router;