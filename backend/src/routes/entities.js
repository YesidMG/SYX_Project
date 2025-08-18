const express = require('express');
const router = express.Router();
const pool = require('../config/config');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM entities');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.json(result.rows);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener entidades" });
  }
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    const result = await pool.query("SELECT * FROM entities WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Entidad no encontrada" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener la entidad" });
  }
});

router.post("/", async (req, res) => {
  const { name, logo } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO entities (name, logo) VALUES ($1, $2) RETURNING *",
      [name, logo]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear entidad" });
  }
});

module.exports = router;