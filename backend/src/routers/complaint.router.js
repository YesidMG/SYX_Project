const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaint.controller');
const {captchaMiddleware} = require('../middlewares/captcha.middleware');

router.get('/', complaintController.getAll);
router.get('/:id', complaintController.getById);
router.get('/:entityId', complaintController.getByEntity);
router.post('/', captchaMiddleware ,complaintController.create);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

module.exports = router;