require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const { PORT, FRONTEND_URL } = require('./config/db');

const entitiesRoutes = require('./infrastructure/routers/entities.router');
const complaintsRoutes = require('./infrastructure/routers/complaints.router');
const reportsRoutes = require('./infrastructure/routers/reports.router');

const app = express();

// Middlewares
app.use(express.json());
// CORS configuration
app.use(cors({origin: FRONTEND_URL}));

// API Routes
app.use('/api/entities', entitiesRoutes);
app.use('/api/complaints', complaintsRoutes);
app.use('/api/reports', reportsRoutes);

// Servir static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

//Export app for testing
module.exports = app;

// Solo levantamos el servidor si NO estamos en test
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}