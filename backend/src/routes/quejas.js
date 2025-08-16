const express = require('express');
const router = express.Router();
const pool = require('../config/config');

router.get('/', async (req, res) => {
  const { entidad_id, entidad_nombre } = req.query;
  let result;
  if (entidad_id && entidad_id !== 'todas') {
    result = await pool.query(
      'SELECT q.*, e.nombre AS entidad_nombre, e.logo FROM quejas q JOIN entidades e ON q.entidad_id = e.id WHERE e.id = $1',
      [entidad_id]
    );
  } else if (entidad_nombre && entidad_nombre !== 'Todas') {
    result = await pool.query(
      'SELECT q.*, e.nombre AS entidad_nombre, e.logo FROM quejas q JOIN entidades e ON q.entidad_id = e.id WHERE e.nombre = $1',
      [entidad_nombre]
    );
  } else {
    result = await pool.query(
      'SELECT q.*, e.nombre AS entidad_nombre, e.logo FROM quejas q JOIN entidades e ON q.entidad_id = e.id'
    );
  }
  res.json(result.rows);
});

module.exports = router;