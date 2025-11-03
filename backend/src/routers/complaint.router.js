const express = require('express')
const router = express.Router()
const complaintController = require('../controllers/complaint.controller')
const { checkSessionMiddleware } = require('../middlewares/check-session.middleware')

router.get('/', complaintController.getAll)
router.get('/:entityId', complaintController.getAll)
//router.get('/:id', complaintController.getById)
router.post('/', complaintController.create)
router.patch('/:id/state', checkSessionMiddleware, complaintController.updateState)

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
})

module.exports = router
