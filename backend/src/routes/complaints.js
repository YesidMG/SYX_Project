const express = require('express');
const router = express.Router();
const pool = require('../config/config');
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));

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

router.post('/', async (req, res) => {
  try {
    const { entity_id, title, description, captcha } = req.body;
    if (!entity_id || !title || !description || !captcha) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    // Verifica el captcha con Google (form-urlencoded)
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', captcha);

    const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });
    const captchaData = await captchaRes.json();
    console.log("Captcha response:", captchaData); // <-- LOG IMPORTANTE
    if (!captchaData.success) {
      return res.status(400).json({ error: "Captcha inválido" });
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