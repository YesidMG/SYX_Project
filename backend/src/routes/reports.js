const express = require('express');
const router = express.Router();
const pool = require('../config/config');

router.get('/', async (req, res) => {
  const result = await pool.query(`
    SELECT 
      e.id, 
      e.name, 
      COUNT(c.id) AS complaints
    FROM entities e
    LEFT JOIN complaints c ON c.entity_id = e.id
    GROUP BY e.id, e.name
    ORDER BY e.id
  `);
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.json(result.rows);
});

module.exports = router;