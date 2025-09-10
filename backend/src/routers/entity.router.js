const express = require('express');
const router = express.Router();
const entityController = require('../controllers/entity.controller');
const {captchaMiddleware} = require('../middlewares/captcha.middleware');

router.get('/', entityController.getAll);
router.get('/:id', entityController.getById);
router.post('/report', captchaMiddleware, entityController.getReport);
router.post('/', entityController.create);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

module.exports = router;