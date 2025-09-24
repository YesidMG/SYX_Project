const express = require('express')
const router = express.Router()
const complaintController = require('../controllers/complaint.controller')
const { captchaMiddleware } = require('../middlewares/captcha.middleware')
const { adminVerifyMiddleware } = require('../middlewares/adminpassword.middleware')

router.get('/', complaintController.getAll)
router.get('/:entityId', complaintController.getAll)
//router.get('/:id', complaintController.getById)
router.post('/', captchaMiddleware, complaintController.create)
router.patch('/:id/state', adminVerifyMiddleware, complaintController.updateState)

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
})

module.exports = router
