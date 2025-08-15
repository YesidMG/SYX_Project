const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const { entidad_id } = req.query;
  let result;
  if (entidad_id && entidad_id !== 'todas') {
    result = await pool.query(
      'SELECT q.*, e.nombre AS entidad_nombre, e.logo FROM quejas q JOIN entidades e ON q.entidad_id = e.id WHERE entidad_id = $1',
      [entidad_id]
    );
  } else {
    result = await pool.query(
      'SELECT q.*, e.nombre AS entidad_nombre, e.logo FROM quejas q JOIN entidades e ON q.entidad_id = e.id'
    );
  }
  res.json(result.rows);
});

module.exports = router;