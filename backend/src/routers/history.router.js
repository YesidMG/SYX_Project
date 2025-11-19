const express = require('express')
const router = express.Router()
const historyController = require('../controllers/history.controller')

// GET historial de estados
router.get('/state-history', historyController.getStateHistory)
router.post('/completed-complaints-report', historyController.getCompletedComplaintsReport)

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
})

module.exports = router
