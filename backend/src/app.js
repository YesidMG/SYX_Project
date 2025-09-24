const express = require('express')
const cors = require('cors')
const path = require('path')

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

const entitiesRouter = require('./routers/entity.router')
const complaintsRouter = require('./routers/complaint.router')
const commentsRouter = require('./routers/comment.router')

const app = express()

// Middlewares
app.use(express.json())
// CORS Configuration
app.use(cors({ origin: FRONTEND_URL }))

// Routers
app.use('/entities', entitiesRouter)
app.use('/complaints', complaintsRouter)
app.use('/comments', commentsRouter)

// Serve static files
app.use(express.static(path.join(__dirname, '../../frontend/dist')))

module.exports = app
