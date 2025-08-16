const express = require('express');
const router = express.Router();
const pool = require('../config/config');

router.get('/', async (req, res) => {
  const result = await pool.query(`
    SELECT 
      e.id, 
      e.nombre, 
      COUNT(q.id) AS quejas
    FROM entidades e
    LEFT JOIN quejas q ON q.entidad_id = e.id
    GROUP BY e.id, e.nombre
    ORDER BY e.id
  `);
  res.json(result.rows);
});

module.exports = router;