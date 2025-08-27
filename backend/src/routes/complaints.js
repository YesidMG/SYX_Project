const express = require('express');
const router = express.Router();
const {pool} = require('../config/config');
const fetch = require("node-fetch");

router.get('/', async (req, res) => {
  const { entity_id, entity_name } = req.query;
  let result;
  if (entity_id && entity_id !== 'Todas') {
    result = await pool.query(
      'SELECT c.*, e.name AS entity_name, e.logo FROM complaints c JOIN entities e ON c.entity_id = e.id WHERE e.id = $1 ORDER BY c.creation_date DESC',
      [entity_id]
    );
  } else if (entity_name && entity_name !== 'Todas') {
    result = await pool.query(
      'SELECT c.*, e.name AS entity_name, e.logo FROM complaints c JOIN entities e ON c.entity_id = e.id WHERE e.name = $1 ORDER BY c.creation_date DESC',
      [entity_name]
    );
  } else {
    result = await pool.query(
      'SELECT c.*, e.name AS entity_name, e.logo FROM complaints c JOIN entities e ON c.entity_id = e.id ORDER BY c.creation_date DESC'
    );
  }
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.json(result.rows);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Validación de ID inválido (ej: "abc")
  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    const result = await pool.query("SELECT * FROM complaints WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Queja no encontrada" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.post('/', async (req, res) => {
  try {
    const { entity_id, title, description, captcha } = req.body;
    if (!entity_id || !title || !description || !captcha) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    // 👇 Bypass en desarrollo
    if (process.env.NODE_ENV === "development") {
      console.log("Captcha bypass en desarrollo");
    } else {
      const secret = "6LfEW6orAAAAAOlTU0HBLaaV_M16s1gDp21oltja";
      const params = new URLSearchParams();
      params.append("secret", secret);
      params.append("response", captcha);

      const captchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params,
        }
      );
      const captchaData = await captchaRes.json();
      console.log("Captcha response:", captchaData);
      if (!captchaData.success) {
        return res.status(400).json({ error: "Captcha inválido" });
      }
    }

    const result = await pool.query(
      `INSERT INTO complaints (entity_id, title, description, creation_date)
       VALUES ($1, $2, $3, NOW())
       RETURNING *`,
      [entity_id, title, description]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error interno:", err);
    res.status(500).json({ error: "Error al registrar la queja" });
  }
});


module.exports = router;